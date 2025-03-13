// This file is used to check if environment variables are properly loaded

export function checkEnvironmentVariables() {
  console.log("Environment Variables Check:");
  console.log("CONTENTFUL_SPACE_ID:", process.env.CONTENTFUL_SPACE_ID || "Not set");
  console.log("CONTENTFUL_ACCESS_TOKEN length:", process.env.CONTENTFUL_ACCESS_TOKEN ? process.env.CONTENTFUL_ACCESS_TOKEN.length : 0);
  
  // Check if running on server or client
  console.log("Running on:", typeof window === 'undefined' ? 'server' : 'client');
  
  // Check if Next.js is properly exposing the variables
  console.log("Next.js public variables:", {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV || "Not set",
    NODE_ENV: process.env.NODE_ENV || "Not set"
  });
  
  return {
    //hasSpaceId: !!process.env.CONTENTFUL_SPACE_ID,
    //hasAccessToken: !!process.env.CONTENTFUL_ACCESS_TOKEN,
    isServer: typeof window === 'undefined'
  };
} 