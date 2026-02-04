$headers = @{
    "Content-Type" = "application/json"
    "X-Goog-Api-Key" = "AIzaSyDu-ohBePcT_LSQrYje1l9lZhQY5XkwObU"
    "X-Goog-FieldMask" = "places.id,places.displayName,places.formattedAddress"
}
$body = @{
    textQuery = "E&B Roofing LLC 774-300-1932"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://places.googleapis.com/v1/places:searchText" -Method Post -Headers $headers -Body $body
    $response.places | Format-List
} catch {
    Write-Host "Error:" $_.Exception.Message
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        Write-Host "Response Body:" $reader.ReadToEnd()
    }
}
