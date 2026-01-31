import nodemailer from "nodemailer";

function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailTemplate({ username, email, number, message }) {
  const name = escapeHtml(username);
  const em = escapeHtml(email);
  const phone = escapeHtml(number);
  const msg = escapeHtml(message || "");

  const subject = `New Service Request — ${name}`;

  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>${subject}</title>
    </head>
    <body style="margin:0;padding:0;background:#0b1220;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b1220;padding:24px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#0f1b33;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);">
              
              <!-- Header -->
              <tr>
                <td style="padding:22px 22px 14px 22px;background:linear-gradient(135deg,#1b2b55,#0f1b33);">
                  <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-size:18px;font-weight:700;line-height:1.2;">
                    Request For Service
                  </div>
                  <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.75);font-size:13px;margin-top:6px;">
                    A new lead was submitted from your website form.
                  </div>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:18px 22px 22px 22px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    
                    <!-- Name -->
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.10);">
                        <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.65);font-size:12px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;">
                          Name
                        </div>
                        <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-size:15px;font-weight:600;margin-top:6px;">
                          ${name}
                        </div>
                      </td>
                    </tr>

                    <!-- Email -->
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.10);">
                        <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.65);font-size:12px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;">
                          Email
                        </div>
                        <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-size:15px;font-weight:600;margin-top:6px;">
                          <a href="mailto:${em}" style="color:#ffffff;text-decoration:underline;">${em}</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Phone -->
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.10);">
                        <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.65);font-size:12px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;">
                          Phone
                        </div>
                        <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-size:15px;font-weight:600;margin-top:6px;">
                          <a href="tel:${phone}" style="color:#ffffff;text-decoration:underline;">${phone}</a>
                        </div>
                      </td>
                    </tr>

                    ${msg ? `
                    <!-- Message -->
                    <tr>
                      <td style="padding:12px 0;">
                        <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.65);font-size:12px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;">
                          Notes
                        </div>
                        <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.88);font-size:14px;line-height:1.65;margin-top:8px;white-space:pre-wrap;">
                          ${msg}
                        </div>
                      </td>
                    </tr>` : ""}

                  </table>

                  <!-- CTA buttons -->
                  <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:18px;">
                    <tr>
                      <td style="padding-right:10px;">
                        <a href="mailto:${em}" style="display:inline-block;font-family:Arial,Helvetica,sans-serif;background:#ffffff;color:#0b1220;text-decoration:none;font-weight:700;font-size:13px;padding:10px 14px;border-radius:10px;">
                          Reply by Email
                        </a>
                      </td>
                      <td>
                        <a href="tel:${phone}" style="display:inline-block;font-family:Arial,Helvetica,sans-serif;background:transparent;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;padding:10px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.35);">
                          Call / Text
                        </a>
                      </td>
                    </tr>
                  </table>

                  <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.55);font-size:12px;margin-top:18px;">
                    Sent from your website contact form.
                  </div>
                </td>
              </tr>

            </table>

            <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,.45);font-size:11px;margin-top:10px;">
              © ${new Date().getFullYear()} Your Company. All rights reserved.
            </div>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  return { subject, html };
}

export async function POST(req) {
  try {
    const { username, email, number, message } = await req.json();

    if (!username || !email || !number) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const { subject, html } = emailTemplate({ username, email, number, message });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,   // Ej: "Website Leads <leads@tudominio.com>"
      to: process.env.MAIL_TO,       // Tu correo
      replyTo: email,                // para responder al cliente fácil
      subject,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
