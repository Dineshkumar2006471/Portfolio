import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and contact number are required." },
        { status: 400 }
      );
    }

    // Log received lead details (accessible in Vercel runtime logs)
    console.log("=== NEW PORTFOLIO CONTACT INQUIRY ===");
    console.log("Date:", new Date().toISOString());
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Service:", service);
    console.log("Message:", message || "(none)");
    console.log("======================================");

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
