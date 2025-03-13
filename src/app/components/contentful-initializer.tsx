'use client';

import { useEffect } from 'react';
import { createClient } from 'contentful';

export default function ContentfulInitializer() {
  useEffect(() => {
    // Initialize Contentful on the client side
    const initContentful = () => {
      try {
        // Get environment variables from meta tags
        const spaceId = document.querySelector('meta[name="contentful-space-id"]')?.getAttribute('content');
        const accessToken = document.querySelector('meta[name="contentful-access-token"]')?.getAttribute('content');
        
        if (!spaceId || !accessToken) {
          console.error('Contentful credentials missing from meta tags');
          return;
        }
        
        // Store in window.__ENV for access by other components
        if (typeof window !== 'undefined') {
          (window as any).__ENV = {
            CONTENTFUL_SPACE_ID: spaceId,
            CONTENTFUL_ACCESS_TOKEN: accessToken,
          };
          
          // Create a test client to verify credentials
          const client = createClient({
            space: spaceId,
            accessToken: accessToken,
          });
          
          console.log('Contentful client initialized on client-side with:', {
            spaceId: spaceId,
            accessTokenLength: accessToken.length,
          });
          
          // Store the client for potential direct access
          (window as any).__CONTENTFUL_CLIENT = client;
        }
      } catch (error) {
        console.error('Error initializing Contentful on client-side:', error);
      }
    };
    
    // Initialize immediately
    initContentful();
    
    // Also initialize after any route changes
    window.addEventListener('routeChangeComplete', initContentful);
    
    return () => {
      window.removeEventListener('routeChangeComplete', initContentful);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
} 