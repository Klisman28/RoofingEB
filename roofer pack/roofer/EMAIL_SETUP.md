# Email Contact Form - Setup & Testing Guide

## 📧 Overview
This implementation sends all contact form submissions to **E_broofing@yahoo.com** using Nodemailer with SMTP configuration.

---

## ⚙️ Setup Instructions

### Step 1: Configure Environment Variables

1. **Open the `.env.local` file** in the root of your project
2. **Choose your SMTP provider** (Gmail recommended)
3. **Fill in the credentials**:

#### For Gmail (Recommended):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_character_app_password
TO_EMAIL=E_broofing@yahoo.com
SMTP_FROM_NAME=Roofing EB Website
```

**⚠️ Important for Gmail:**
- You MUST use an **App Password**, not your regular Gmail password
- Steps to generate App Password:
  1. Enable 2-Factor Authentication on your Google account
  2. Visit: https://myaccount.google.com/apppasswords
  3. Select "Mail" and "Other (Custom name)"
  4. Copy the 16-character password (no spaces)
  5. Paste it in `SMTP_PASS`

#### For Zoho Mail:
```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@zoho.com
SMTP_PASS=your_password
TO_EMAIL=E_broofing@yahoo.com
```

#### For Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
TO_EMAIL=E_broofing@yahoo.com
```

### Step 2: Restart Development Server

After configuring `.env.local`, **restart your Next.js server**:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**Note:** Environment variables are only loaded when the server starts, so you must restart after any changes.

---

## 🧪 Testing the Implementation

### Method 1: Using PowerShell (Test Script)

Use the provided test script to send a test email:

```powershell
# Run the test script
.\test_api.ps1
```

Or manually:

```powershell
# Test with all fields
$body = @{
    name = "John Doe"
    email = "john@example.com"
    phone = "555-1234"
    message = "I need a roofing quote"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/contact" -Method POST -Body $body -ContentType "application/json"
```

```powershell
# Test without message (should still work)
$body = @{
    name = "Jane Smith"
    email = "jane@example.com"
    phone = "555-5678"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/contact" -Method POST -Body $body -ContentType "application/json"
```

### Method 2: Using cURL

```bash
# Test with message
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-0000",
    "message": "This is a test message"
  }'
```

```bash
# Test without message
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-0000"
  }'
```

### Method 3: Using Your Contact Form

1. Start your development server: `npm run dev`
2. Navigate to your contact form page
3. Fill out the form with test data
4. Submit the form
5. Check for success response in browser console
6. Check **E_broofing@yahoo.com** inbox for the email

---

## ✅ Expected Results

### Successful Response (200):
```json
{
  "ok": true
}
```

### Validation Error (400):
```json
{
  "error": "Missing required fields: name, email, and phone are required"
}
```

Or:
```json
{
  "error": "Invalid email format"
}
```

### Server Error (500):
```json
{
  "error": "Failed to send email. Please try again later."
}
```

### Email Content

You should receive an email at **E_broofing@yahoo.com** with:

- **Subject:** `New Service Request - [Name] ([Phone])`
- **From:** Roofing EB Website (or your custom name)
- **Reply-To:** Customer's email (for easy replies)
- **Body:** Formatted HTML with all customer details

---

## 🔍 Troubleshooting

### Issue 1: "Email service configuration error"
**Cause:** SMTP credentials are incorrect or SMTP server is unreachable

**Solutions:**
- Double-check your SMTP credentials in `.env.local`
- For Gmail: Ensure you're using an App Password, not regular password
- Check if 2FA is enabled (required for Gmail App Passwords)
- Try changing SMTP_PORT from 465 to 587 and SMTP_SECURE to false

### Issue 2: "Missing required fields"
**Cause:** Frontend is not sending name, email, or phone

**Solutions:**
- Verify your frontend form includes all three required fields
- Check browser console for fetch errors
- Ensure Content-Type header is "application/json"

### Issue 3: Email not arriving at E_broofing@yahoo.com
**Cause:** Email might be in spam, or Yahoo is blocking it

**Solutions:**
- Check spam/junk folder in Yahoo Mail
- Wait a few minutes (sometimes there's a delay)
- Try sending from a different SMTP provider (Gmail usually works best)
- Check your SMTP provider's sent mail to confirm it was sent

### Issue 4: Environment variables not loading
**Cause:** Server wasn't restarted after editing `.env.local`

**Solutions:**
- Always restart the Next.js dev server after changing `.env.local`
- Use `Ctrl+C` to stop, then `npm run dev` to start again
- Verify `.env.local` is in the project root (same level as `package.json`)

### Issue 5: Debugging in production
**Solutions:**
- Check server logs for detailed error messages
- Use `console.log(error)` to see full error details
- Test locally first before deploying to production

---

## 🛡️ Security Best Practices

✅ **Implemented:**
- Environment variables for credentials (not in code)
- Input sanitization (trim, length limits)
- Email format validation
- Required field validation
- Message length limit (2000 characters)
- SMTP connection verification

❌ **DO NOT:**
- Commit `.env.local` to Git (it's already in `.gitignore`)
- Share your SMTP credentials
- Remove input validation
- Expose credentials in frontend code

---

## 📋 API Endpoint Documentation

### POST /api/contact

**Request Body:**
```json
{
  "name": "string (required, max sanitized length)",
  "email": "string (required, must be valid email format)",
  "phone": "string (required)",
  "message": "string (optional, max 2000 characters)"
}
```

**Success Response (200):**
```json
{
  "ok": true
}
```

**Error Responses:**
- **400:** Missing or invalid fields
- **500:** Email service configuration error or sending failure

**Features:**
- Validates all required fields
- Sanitizes input (trim, length limits)
- Sends formatted HTML email
- Includes replyTo for easy customer replies
- Always sends to E_broofing@yahoo.com

---

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform's dashboard
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

2. **Use the same variables** as in `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `TO_EMAIL`
   - `SMTP_FROM_NAME` (optional)

3. **Redeploy** your application after adding variables

4. **Test** the production endpoint using your live domain

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review server logs for error details
3. Test with a simple curl command first
4. Verify all environment variables are set correctly

**Common Success Indicators:**
- ✅ Server starts without errors
- ✅ SMTP verification passes
- ✅ Status 200 response received
- ✅ Email arrives at E_broofing@yahoo.com within 1-2 minutes
