# 📧 Contact Form Email Implementation - Quick Reference

## ✅ What Was Implemented

### 1. API Endpoint
- **File:** `/app/api/contact/route.js`
- **Method:** POST
- **URL:** `/api/contact`

### 2. Required Fields
- ✅ `name` (string, required)
- ✅ `email` (string, required, validated)
- ✅ `phone` (string, required)
- ⭕ `message` (string, optional, max 2000 chars)

### 3. Response Format
```json
// Success (200)
{ "ok": true }

// Error (400 or 500)
{ "error": "Error message here" }
```

### 4. Email Configuration
- **Recipient:** E_broofing@yahoo.com (hardcoded fallback)
- **Subject:** "New Service Request - {name} ({phone})"
- **Reply-To:** Customer's email
- **HTML Template:** Professional formatted email

### 5. Security Features
- ✅ Input sanitization (trim)
- ✅ Email format validation
- ✅ Message length limit (2000 chars)
- ✅ Required field validation
- ✅ SMTP connection verification
- ✅ No credentials in frontend code

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Configure `.env.local`
```env
# Gmail (Recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_char_app_password
TO_EMAIL=E_broofing@yahoo.com
```

**Gmail App Password:** https://myaccount.google.com/apppasswords

### Step 2: Restart Server
```bash
npm run dev
```

### Step 3: Test
```powershell
.\test_contact_api.ps1
```

---

## 📝 Frontend Integration

Your frontend should POST JSON to `/api/contact`:

```javascript
// Example fetch call
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-1234',
    message: 'Optional message here' // Can be omitted
  })
});

const result = await response.json();

if (response.ok) {
  console.log('✅ Email sent successfully!');
} else {
  console.error('❌ Error:', result.error);
}
```

---

## 🛠️ Troubleshooting Checklist

| Issue | Solution |
|-------|----------|
| "Email service configuration error" | Check SMTP credentials in `.env.local` |
| Email not arriving | Check spam folder, verify TO_EMAIL |
| "Missing required fields" | Ensure name, email, phone are included |
| "Invalid email format" | Validate email format client-side first |
| Changes not applying | Restart dev server after editing `.env.local` |

---

## 📄 Files Created/Modified

✅ `/app/api/contact/route.js` - Updated API endpoint
✅ `.env.local` - SMTP configuration (DO NOT COMMIT)
✅ `.env.example` - Template for developers
✅ `EMAIL_SETUP.md` - Full setup & testing guide
✅ `test_contact_api.ps1` - PowerShell test script
✅ `QUICK_REFERENCE.md` - This file

---

## 🎯 Testing Endpoints

### PowerShell
```powershell
.\test_contact_api.ps1
```

### cURL
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"555-0000"}'
```

### Browser Console
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    name: 'Browser Test',
    email: 'test@example.com',
    phone: '555-9999'
  })
}).then(r => r.json()).then(console.log)
```

---

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` - NEVER commit it
- ✅ All input is sanitized and validated
- ✅ Message length is limited to 2000 characters
- ✅ Email format is validated with regex
- ✅ SMTP credentials stored in environment variables only
- ✅ No sensitive data exposed to client

---

## 📞 Support

For detailed instructions: **See `EMAIL_SETUP.md`**

For issues:
1. Check `.env.local` configuration
2. Verify server is running (`npm run dev`)
3. Run test script: `.\test_contact_api.ps1`
4. Check server console for errors
5. Verify email in spam folder at E_broofing@yahoo.com
