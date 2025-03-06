import { NextResponse } from 'next/server';
import { getAllHackathons } from '../../../lib/contentful';
import { createClient } from 'contentful';

export async function GET() {
  try {
    // Get the client directly to check content types
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
    });
    
    // Get the hackathon content type
    const contentType = await client.getContentType('hackathon');
    
    // Get all hackathons
    const hackathons = await getAllHackathons();
    
    return NextResponse.json({
      success: true,
      contentType: {
        name: contentType.name,
        fields: contentType.fields.map(field => ({
          id: field.id,
          name: field.name,
          type: field.type,
          required: field.required,
        })),
      },
      count: hackathons.length,
      hackathons: hackathons.map(h => ({
        id: h.sys.id,
        title: h.fields.title,
        // Don't try to access fields that might not exist
        allFields: Object.keys(h.fields),
      })),
    });
  } catch (error) {
    console.error('Error testing Contentful:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
} 