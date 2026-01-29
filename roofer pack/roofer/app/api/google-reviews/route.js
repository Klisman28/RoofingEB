import { NextResponse } from 'next/server';

export async function GET() {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    if (!API_KEY) {
        return NextResponse.json(
            { error: 'Google Places API Key not configured' },
            { status: 500 }
        );
    }

    try {
        // Use the Places API (New)
        // If PLACE_ID is available, get details directly.
        // For New API, place ID is a string.

        let url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`;
        // If PLACE_ID is missing or looks like a CID, we might need to search first, 
        // but for now let's assume the user will provide a valid textual Place ID.

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': API_KEY,
                'X-Goog-FieldMask': 'id,displayName,reviews'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Google API Error:", data);
            return NextResponse.json({ error: data.error?.status || "API_ERROR", message: data.error?.message }, { status: response.status });
        }

        return NextResponse.json({ reviews: data.reviews || [] });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}
