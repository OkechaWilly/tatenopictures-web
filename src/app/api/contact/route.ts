import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name, email, or message." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured. Logging submission instead.");
      console.log("New Contact Submission (NOT SENT):", { name, email, message, service });
      return NextResponse.json(
        { 
          success: true, 
          message: "Message received! We'll get back to you soon. (Email service not configured)" 
        },
        { status: 200 }
      );
    }

    // Send email via Resend to studio inbox
    await resend.emails.send({
      from: "noreply@tatenopictures.com",
      to: "info@tatenopictures.com",
      replyTo: email,
      subject: `New Project Inquiry from ${name}${service ? ` - ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C;">New Project Inquiry</h2>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #C9A84C;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            ${service ? `<p><strong>Service Interest:</strong> ${escapeHtml(service)}</p>` : ""}
            
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">
            This email was sent from the Tateno Pictures contact form. 
            Reply directly to this email to reach the client.
          </p>
        </div>
      `,
    });

    // Send confirmation email to client
    await resend.emails.send({
      from: "Tateno Pictures <noreply@tatenopictures.com>",
      to: email,
      subject: "We received your message - Tateno Pictures",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C;">Thank you, ${escapeHtml(name)}!</h2>
          
          <p style="color: #666;">We've received your message and appreciate your interest in working with Tateno Pictures.</p>
          
          <p style="color: #666;">Our team will review your inquiry and get back to you within 24-48 hours.</p>
          
          <p style="color: #666;">In the meantime, feel free to explore our work at <strong>tatenopictures.com</strong> or follow us on social media.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #999;">
            <strong>Tateno Pictures</strong><br/>
            Kampala, Uganda<br/>
            info@tatenopictures.com
          </p>
        </div>
      `,
    });

    console.log("Contact submission processed and emails sent:", { name, email, service });

    return NextResponse.json(
      { success: true, message: "Message sent successfully! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to process your message. Please try again later or email us directly at info@tatenopictures.com" 
      },
      { status: 500 }
    );
  }
}

// Utility function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
