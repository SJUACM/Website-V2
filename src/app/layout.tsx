import React from "react";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { PostHogProvider } from "./providers/posthog-provider";

// Initialize FontAwesome configuration
config.autoAddCss = false; // Disable auto CSS injection as we import the CSS file above

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <title>STJ ACM Website</title>
        <meta name="description" content="STJ ACM Website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        suppressHydrationWarning
        className={`${comfortaa.className} bg-black text-white min-h-screen flex flex-col`}
      >
        <PostHogProvider>
          {children}
          <Footer />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
