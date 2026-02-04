import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/contact
 * 
 * Handles contact form submissions and sends emails to E_broofing@yahoo.com
 * 
 * Expected JSON body:
 * {
 *   "name": string (required),
 *   "email": string (required),
 *   "phone": string (required),
 *   "message": string (optional)
 * }
 */
export async function POST(request) {
    try {
        const data = await request.json();

        // Extract and sanitize fields
        const name = data.name?.toString().trim() || '';
        const email = data.email?.toString().trim() || '';
        const phone = data.phone?.toString().trim() || '';
        const message = data.message?.toString().trim().substring(0, 2000) || ''; // Limit to 2000 chars

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, and phone are required' },
                { status: 400 }
            );
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Create SMTP transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Verify SMTP connection (optional but helpful for debugging)
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('SMTP verification failed:', verifyError);
            return NextResponse.json(
                { error: 'Email service configuration error' },
                { status: 500 }
            );
        }

        // Prepare email content
        const subject = `New Service Request - ${name} (${phone})`;
        const toEmail = process.env.TO_EMAIL || 'E_broofing@yahoo.com';

        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME || 'Roofing EB Website'}" <${process.env.SMTP_USER}>`,
            to: toEmail,
            replyTo: email, // Allows easy replies to the customer
            subject: subject,
            text: `
New Service Request

Name: ${name}
Email: ${email}
Phone: ${phone}

${message ? `Message:\n${message}` : 'No message provided.'}

---
This email was sent from your website contact form.
            `.trim(),
            html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #007bff; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #000; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Service Request</h2>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span> 
                <span class="value">${name}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span> 
                <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="field">
                <span class="label">Phone:</span> 
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
            </div>
            ${message ? `
            <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="margin-top: 10px; padding: 10px; background: white; border-left: 3px solid #007bff;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
            ` : '<p style="color: #888;"><em>No message provided.</em></p>'}
        </div>
        <div class="footer">
            This email was sent from your website contact form.
        </div>
    </div>
</body>
</html>
            `.trim(),
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success response
        return NextResponse.json({ ok: true }, { status: 200 });

    } catch (error) {
        console.error('Error processing contact form:', error);

        // Return error response
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
