# ============================================
# Contact Form API Test Script
# ============================================
# This script tests the /api/contact endpoint locally
# Make sure your dev server is running: npm run dev

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host "  Testing Contact Form API" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

$baseUrl = "http://localhost:3000"
$endpoint = "$baseUrl/api/contact"

# ============================================
# TEST 1: Valid request with all fields
# ============================================
Write-Host "`n[TEST 1] Sending request with all fields..." -ForegroundColor Yellow

$body1 = @{
    name = "John Doe"
    email = "john.doe@example.com"
    phone = "555-0123"
    message = "I need a quote for roof repair. Please contact me as soon as possible."
} | ConvertTo-Json

try {
    $response1 = Invoke-RestMethod -Uri $endpoint -Method POST -Body $body1 -ContentType "application/json"
    Write-Host "✅ SUCCESS: " -ForegroundColor Green -NoNewline
    Write-Host ($response1 | ConvertTo-Json)
} catch {
    Write-Host "❌ FAILED: " -ForegroundColor Red -NoNewline
    Write-Host $_.Exception.Message
    if ($_.ErrorDetails.Message) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
}

# ============================================
# TEST 2: Valid request WITHOUT message (optional field)
# ============================================
Write-Host "`n[TEST 2] Sending request without message field..." -ForegroundColor Yellow

$body2 = @{
    name = "Jane Smith"
    email = "jane.smith@example.com"
    phone = "555-9876"
} | ConvertTo-Json

try {
    $response2 = Invoke-RestMethod -Uri $endpoint -Method POST -Body $body2 -ContentType "application/json"
    Write-Host "✅ SUCCESS: " -ForegroundColor Green -NoNewline
    Write-Host ($response2 | ConvertTo-Json)
} catch {
    Write-Host "❌ FAILED: " -ForegroundColor Red -NoNewline
    Write-Host $_.Exception.Message
    if ($_.ErrorDetails.Message) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
}

# ============================================
# TEST 3: Invalid request - Missing required field (name)
# ============================================
Write-Host "`n[TEST 3] Testing validation - Missing 'name' field..." -ForegroundColor Yellow

$body3 = @{
    email = "test@example.com"
    phone = "555-1111"
    message = "Test message"
} | ConvertTo-Json

try {
    $response3 = Invoke-RestMethod -Uri $endpoint -Method POST -Body $body3 -ContentType "application/json"
    Write-Host "⚠️ UNEXPECTED: Should have failed but got: " -ForegroundColor Yellow -NoNewline
    Write-Host ($response3 | ConvertTo-Json)
} catch {
    Write-Host "✅ EXPECTED ERROR: " -ForegroundColor Green -NoNewline
    if ($_.ErrorDetails.Message) {
        Write-Host $_.ErrorDetails.Message
    } else {
        Write-Host $_.Exception.Message
    }
}

# ============================================
# TEST 4: Invalid request - Missing required field (email)
# ============================================
Write-Host "`n[TEST 4] Testing validation - Missing 'email' field..." -ForegroundColor Yellow

$body4 = @{
    name = "Test User"
    phone = "555-2222"
    message = "Test message"
} | ConvertTo-Json

try {
    $response4 = Invoke-RestMethod -Uri $endpoint -Method POST -Body $body4 -ContentType "application/json"
    Write-Host "⚠️ UNEXPECTED: Should have failed but got: " -ForegroundColor Yellow -NoNewline
    Write-Host ($response4 | ConvertTo-Json)
} catch {
    Write-Host "✅ EXPECTED ERROR: " -ForegroundColor Green -NoNewline
    if ($_.ErrorDetails.Message) {
        Write-Host $_.ErrorDetails.Message
    } else {
        Write-Host $_.Exception.Message
    }
}

# ============================================
# TEST 5: Invalid request - Invalid email format
# ============================================
Write-Host "`n[TEST 5] Testing validation - Invalid email format..." -ForegroundColor Yellow

$body5 = @{
    name = "Test User"
    email = "not-an-email"
    phone = "555-3333"
    message = "Test message"
} | ConvertTo-Json

try {
    $response5 = Invoke-RestMethod -Uri $endpoint -Method POST -Body $body5 -ContentType "application/json"
    Write-Host "⚠️ UNEXPECTED: Should have failed but got: " -ForegroundColor Yellow -NoNewline
    Write-Host ($response5 | ConvertTo-Json)
} catch {
    Write-Host "✅ EXPECTED ERROR: " -ForegroundColor Green -NoNewline
    if ($_.ErrorDetails.Message) {
        Write-Host $_.ErrorDetails.Message
    } else {
        Write-Host $_.Exception.Message
    }
}

# ============================================
# TEST 6: Long message (testing 2000 char limit)
# ============================================
Write-Host "`n[TEST 6] Testing with long message (should be truncated to 2000 chars)..." -ForegroundColor Yellow

$longMessage = "A" * 2500  # 2500 characters

$body6 = @{
    name = "Test Long Message"
    email = "long@example.com"
    phone = "555-4444"
    message = $longMessage
} | ConvertTo-Json

try {
    $response6 = Invoke-RestMethod -Uri $endpoint -Method POST -Body $body6 -ContentType "application/json"
    Write-Host "✅ SUCCESS (message should be truncated): " -ForegroundColor Green -NoNewline
    Write-Host ($response6 | ConvertTo-Json)
} catch {
    Write-Host "❌ FAILED: " -ForegroundColor Red -NoNewline
    Write-Host $_.Exception.Message
    if ($_.ErrorDetails.Message) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
}

# ============================================
# SUMMARY
# ============================================
Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host "  Testing Complete!" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "1. Check your email at E_broofing@yahoo.com" -ForegroundColor White
Write-Host "2. Verify emails have subject: 'New Service Request - [Name] ([Phone])'" -ForegroundColor White
Write-Host "3. Test the replyTo functionality by replying to a test email" -ForegroundColor White
Write-Host "`nNote: If emails don't arrive:" -ForegroundColor Yellow
Write-Host "- Check spam/junk folder" -ForegroundColor White
Write-Host "- Verify SMTP credentials in .env.local" -ForegroundColor White
Write-Host "- Check server console for error messages" -ForegroundColor White
Write-Host "`n"
