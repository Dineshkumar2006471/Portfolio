import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateEmailHtml({
  name,
  email,
  phone,
  service,
  message,
  timestamp,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Not provided";
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry from ${safeName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f5f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f5f2; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e7e5e4;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #0066FF 0%, #7C3AED 50%, #DB2777 100%);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #f5f3ef;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display: inline-block; padding: 4px 12px; background-color: #eff6ff; color: #0066FF; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; border-radius: 9999px; margin-bottom: 12px;">
                      ✦ New Portfolio Lead
                    </span>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #1c1917; line-height: 1.3;">
                      New inquiry for <span style="color: #0066FF;">${safeService}</span>
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #78716c;">
                      Received on ${timestamp} IST via portfolio-app
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Overview Grid -->
          <tr>
            <td style="padding: 24px 32px; background-color: #fafaf9; border-bottom: 1px solid #f5f3ef;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #a8a29e; display: block; margin-bottom: 3px;">Full Name</span>
                    <span style="font-size: 16px; font-weight: 700; color: #1c1917;">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #a8a29e; display: block; margin-bottom: 3px;">Email Address</span>
                    <a href="mailto:${safeEmail}" style="font-size: 15px; font-weight: 600; color: #0066FF; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #a8a29e; display: block; margin-bottom: 3px;">Phone Number</span>
                    <span style="font-size: 14px; font-weight: 500; color: #44403c;">${safePhone}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #a8a29e; display: block; margin-bottom: 3px;">Service Requested</span>
                    <span style="display: inline-block; font-size: 13px; font-weight: 700; color: #1c1917; background-color: #ffffff; padding: 4px 10px; border-radius: 8px; border: 1px solid #e7e5e4;">
                      ${safeService}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 28px 32px 32px 32px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #78716c; display: block; margin-bottom: 10px;">
                Message from ${safeName}:
              </span>
              <div style="background-color: #ffffff; border-left: 4px solid #0066FF; padding: 16px 20px; border-radius: 0 12px 12px 0; background-color: #f8fafc; font-size: 15px; line-height: 1.6; color: #334155; font-style: normal;">
                ${safeMessage || "<span style='color: #94a3b8;'>No extra message provided.</span>"}
              </div>

              <!-- Action CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(safeService)}%20Inquiry%20-%20Dinesh%20Kumar%20Bingi" 
                       style="display: inline-block; background-color: #0066FF; color: #ffffff; font-size: 15px; font-weight: 700; text-decoration: none; padding: 13px 28px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(0,102,255,0.35);">
                      Reply directly to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #f5f4f0; border-top: 1px solid #e7e5e4; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #a8a29e;">
                This message was sent from your portfolio contact form at <strong>bingidineshkumar.com</strong>.
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #c7c2b8;">
                Recipient: bingdineshkumar@gmail.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || "bingdineshkumar@gmail.com";
    const serviceName = service || "General Inquiry";
    const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const htmlContent = generateEmailHtml({
      name,
      email,
      phone: phone || "",
      service: serviceName,
      message: message || "",
      timestamp: now,
    });

    const textContent = `
NEW INQUIRY FROM YOUR PORTFOLIO:
------------------------------------
Name:    ${name}
Email:   ${email}
Phone:   ${phone || "N/A"}
Service: ${serviceName}
Time:    ${now} IST

Message:
${message || "No extra message provided."}
------------------------------------
Reply-To: ${email}
    `.trim();

    // 1. Check if Gmail App Password is configured (Recommended for Gmail)
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD;

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} (via Portfolio)" <${gmailUser}>`,
        to: recipient,
        replyTo: email,
        subject: `✦ New Inquiry: ${name} · ${serviceName}`,
        text: textContent,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, provider: "gmail" });
    }

    // 2. Fallback: Check if Resend is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject: `✦ New Inquiry: ${name} · ${serviceName}`,
        text: textContent,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, provider: "resend" });
    }

    // 3. Fallback for Local Development / Missing Env Vars:
    console.warn(
      "[Contact API] No email credentials configured in environment variables (GMAIL_APP_PASS or RESEND_API_KEY). Email logged to console."
    );
    console.log(textContent);

    return NextResponse.json({
      success: true,
      provider: "mock",
      note: "Email logged to console. Configure GMAIL_USER + GMAIL_APP_PASS in Vercel to receive real emails.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to send email";
    console.error("[Contact API Error]:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
