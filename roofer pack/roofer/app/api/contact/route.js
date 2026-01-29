
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email, phone, message } = data;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create a transporter using SMTP credentials from .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.hostinger.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAIL_FROM || `"Website Website" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO || 'E_broofing@yahoo.com',
            replyTo: email,
            subject: `New Lead from Website: ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    }
}
