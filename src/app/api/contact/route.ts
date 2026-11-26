import { NextResponse } from "next/server";
import { Resend } from "resend";

const serviceLabels: Record<string, string> = {
  film: "Film & documentary production",
  "music-video": "Music video production",
  events: "Wedding & event films",
  photography: "Photography",
  "post-production": "Editing & colour grading",
  creative: "Creative visuals & design",
  academy: "Academy & community programme",
  general: "Something else",
};

const MAX_REQUEST_BYTES = 16 * 1024;

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { success: false, message: "Your enquiry is too large. Please shorten your message and try again." },
        { status: 413 }
      );
    }

    const contentType = req.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let message = "";
    let service = "";
    let timeline = "";
    let website = "";

    if (contentType.includes("application/json")) {
      const rawBody = await req.text();
      if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
        return NextResponse.json(
          { success: false, message: "Your enquiry is too large. Please shorten your message and try again." },
          { status: 413 }
        );
      }
      let body: unknown;
      try {
        body = JSON.parse(rawBody);
      } catch {
        return NextResponse.json(
          { success: false, message: "The enquiry could not be read. Please check the form and try again." },
          { status: 400 }
        );
      }
      if (!body || typeof body !== "object" || Array.isArray(body)) {
        return NextResponse.json(
          { success: false, message: "Please submit a valid enquiry." },
          { status: 400 }
        );
      }
      const data = body as Record<string, unknown>;
      name = typeof data.name === "string" ? data.name : "";
      email = typeof data.email === "string" ? data.email : "";
      message = typeof data.message === "string" ? data.message : "";
      service = typeof data.service === "string" ? data.service : "";
      timeline = typeof data.timeline === "string" ? data.timeline : "";
      website = typeof data.website === "string" ? data.website : "";
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      name = formData.get("name")?.toString() || "";
      email = formData.get("email")?.toString() || "";
      message = formData.get("message")?.toString() || "";
      service = formData.get("service")?.toString() || "";
      timeline = formData.get("timeline")?.toString() || "";
      website = formData.get("website")?.toString() || "";
    } else {
      return NextResponse.json(
        { success: false, message: "Unsupported enquiry format." },
        { status: 415 }
      );
    }

    if (website.trim()) {
      return NextResponse.json(
        { success: true, message: "Your enquiry has been received. We'll be in touch soon." },
        { status: 200 }
      );
    }

    const cleanName = name.trim().replace(/[\r\n\t]+/g, " ");
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const serviceKey = service.trim();
    const cleanService = serviceKey ? serviceLabels[serviceKey] : "";
    const cleanTimeline = timeline.trim().slice(0, 80);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { success: false, message: "Please complete your name, email address and project message." },
        { status: 400 }
      );
    }

    if (cleanName.length > 100 || cleanEmail.length > 254 || cleanMessage.length < 10 || cleanMessage.length > 5000 || timeline.length > 80) {
      return NextResponse.json(
        { success: false, message: "Please check your details. The name, email or project message is outside the accepted length." },
        { status: 400 }
      );
    }

    if (serviceKey && !cleanService) {
      return NextResponse.json(
        { success: false, message: "Please select one of the listed services." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const contactEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !contactEmail) {
      console.error("Contact submission blocked: email service configuration is incomplete.", {
        hasApiKey: Boolean(apiKey),
        hasFromEmail: Boolean(fromEmail),
        hasContactEmail: Boolean(contactEmail),
      });
      return NextResponse.json(
        { success: false, message: "Our contact service is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage);
    const safeService = escapeHtml(cleanService);
    const safeTimeline = escapeHtml(cleanTimeline);

    const { error: inquiryError } = await resend.emails.send({
      from: `Tateno Pictures <${fromEmail}>`,
      to: contactEmail,
      replyTo: cleanEmail,
      subject: `New Project Inquiry from ${cleanName}${cleanService ? ` - ${cleanService}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B85B3D;">New Project Inquiry</h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f7f5f0; border-left: 4px solid #B85B3D;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${cleanService ? `<p><strong>Service interest:</strong> ${safeService}</p>` : ""}
            ${cleanTimeline ? `<p><strong>Preferred timing:</strong> ${safeTimeline}</p>` : ""}
            <p><strong>Project details:</strong></p>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This enquiry was sent through the Tateno Pictures website.</p>
        </div>
      `,
    });

    if (inquiryError) {
      console.error("Resend could not deliver the studio enquiry:", inquiryError);
      return NextResponse.json(
        { success: false, message: "We could not send your enquiry. Please try again later." },
        { status: 502 }
      );
    }

    const { error: confirmationError } = await resend.emails.send({
      from: `Tateno Pictures <${fromEmail}>`,
      to: cleanEmail,
      subject: "We received your message - Tateno Pictures",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B85B3D;">Thank you, ${safeName}.</h2>
          <p style="color: #555;">We've received your project enquiry and appreciate you considering Tateno Pictures.</p>
          <p style="color: #555;">A member of the studio will review your message and respond as soon as possible.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;"><strong>Tateno Pictures</strong><br/>Kampala, Uganda</p>
        </div>
      `,
    });

    if (confirmationError) {
      console.error("Studio received the enquiry, but the client confirmation email failed:", confirmationError);
    }

    console.log("Contact enquiry delivered to studio:", { service: cleanService || "unspecified" });

    return NextResponse.json(
      { success: true, message: "Your enquiry has been received. We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { success: false, message: "We couldn't process your enquiry. Please try again in a moment." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return value.replace(/[&<>"']/g, (character) => map[character]);
}
