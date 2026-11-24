import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let message = "";
    let service = "";

    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = body.name || "";
      email = body.email || "";
      message = body.message || "";
      service = body.service || "";
    } else {
      const formData = await req.formData();
      name = formData.get("name")?.toString() || "";
      email = formData.get("email")?.toString() || "";
      message = formData.get("message")?.toString() || "";
      service = formData.get("service")?.toString() || "";
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name, email, or message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
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
        {
          success: false,
          message: "Our contact service is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());
    const safeService = escapeHtml(service.trim());

    const { error: inquiryError } = await resend.emails.send({
      from: `Tateno Pictures <${fromEmail}>`,
      to: contactEmail,
      replyTo: email.trim(),
      subject: `New Project Inquiry from ${name.trim()}${service ? ` - ${service.trim()}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C;">New Project Inquiry</h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #C9A84C;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${service ? `<p><strong>Service Interest:</strong> ${safeService}</p>` : ""}
            <p><strong>Message:</strong></p>
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

    // The enquiry is safely delivered to the studio; a failed acknowledgement
    // should not encourage the visitor to submit the same enquiry again.
    const { error: confirmationError } = await resend.emails.send({
      from: `Tateno Pictures <${fromEmail}>`,
      to: email.trim(),
      subject: "We received your message - Tateno Pictures",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C;">Thank you, ${safeName}!</h2>
          <p style="color: #666;">We've received your message and appreciate your interest in working with Tateno Pictures.</p>
          <p style="color: #666;">Our team will review your enquiry and get back to you within 24-48 hours.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;"><strong>Tateno Pictures</strong><br/>Kampala, Uganda</p>
        </div>
      `,
    });

    if (confirmationError) {
      console.error("Studio received the enquiry, but the client confirmation email failed:", confirmationError);
    }

    console.log("Contact enquiry delivered to studio:", { service: service || "unspecified" });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received. We'll be in touch soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't process your enquiry. Please try again later.",
      },
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
