import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // For now: log to console (later we can connect to email or database)
  console.log("New Contact Submission:", { name, email, message });

  return NextResponse.json(
    { success: true, message: "Message received! We’ll get back to you soon." },
    { status: 200 }
  );
}
