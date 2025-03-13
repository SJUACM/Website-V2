import { NextResponse } from 'next/server';

// This API route provides environment variables to the client
export async function GET() {
  // Only expose specific environment variables
  const env = {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  };

  // Log what we're sending (without sensitive values)
  console.log('Providing environment variables to client:', {
    CONTENTFUL_SPACE_ID: !!env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: !!env.CONTENTFUL_ACCESS_TOKEN,
  });

  return NextResponse.json(env);
} 