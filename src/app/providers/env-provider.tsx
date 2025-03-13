'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the environment variables we want to expose
interface EnvVars {
  CONTENTFUL_SPACE_ID?: string;
  CONTENTFUL_ACCESS_TOKEN?: string;
}

// Create a context for our environment variables
const EnvContext = createContext<EnvVars>({});

// Hook to access environment variables
export const useEnv = () => useContext(EnvContext);

// Provider component that makes environment variables available to client components
export function EnvProvider({
  children,
  initialEnv,
}: {
  children: React.ReactNode;
  initialEnv: EnvVars;
}) {
  const [env, setEnv] = useState<EnvVars>(initialEnv);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch environment variables from API and set them on window
  useEffect(() => {
    async function fetchEnv() {
      try {
        // First try to use the initial env variables passed from the server
        if (initialEnv.CONTENTFUL_SPACE_ID && initialEnv.CONTENTFUL_ACCESS_TOKEN) {
          console.log('Using environment variables from server');
          setEnv(initialEnv);
        } else {
          // If not available, fetch from our API
          console.log('Fetching environment variables from API');
          const response = await fetch('/api/env');
          if (!response.ok) {
            throw new Error('Failed to fetch environment variables');
          }
          const data = await response.json();
          setEnv(data);
          console.log('Environment variables fetched from API');
        }

        // Set environment variables on window for direct access
        if (typeof window !== 'undefined') {
          (window as any).__ENV = env;
          
          // Also try to set them on process.env for compatibility
          if (process.env) {
            Object.entries(env).forEach(([key, value]) => {
              if (value) {
                process.env[key] = value;
              }
            });
          }
        }
      } catch (error) {
        console.error('Error fetching environment variables:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEnv();
  }, [initialEnv]);

  // Log what we have
  useEffect(() => {
    if (!isLoading) {
      console.log('Environment variables available in client:', {
        CONTENTFUL_SPACE_ID: !!env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: !!env.CONTENTFUL_ACCESS_TOKEN,
      });
    }
  }, [env, isLoading]);

  return (
    <EnvContext.Provider value={env}>
      {children}
    </EnvContext.Provider>
  );
} 