import React from "react";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";
import { NavbarClient } from "@/app/components/navbar-client";

// This is a server component that fetches the logo
export async function NavbarLogo() {
  try {
    console.log("Fetching navbar logo...");
    const logoData = await getLandingPageGraphicByTitle("STJ ACM Nav Bar");
    console.log("Logo data received:", logoData);

    let logoUrl = "/images/SJU_ACM_Logo.png"; // Default fallback

    // Check both image and graphic fields
    if (logoData?.fields?.image?.fields?.file?.url) {
      logoUrl = logoData.fields.image.fields.file.url;
      console.log("Found logo URL in image field:", logoUrl);
    } else if (logoData?.fields?.graphic?.fields?.file?.url) {
      logoUrl = logoData.fields.graphic.fields.file.url;
      console.log("Found logo URL in graphic field:", logoUrl);
    }

    // Handle different URL formats
    if (logoUrl && !logoUrl.startsWith("http") && !logoUrl.startsWith("/")) {
      logoUrl = `https:${logoUrl}`;
    }

    console.log("Final logo URL:", logoUrl);

    return logoUrl;
  } catch (error) {
    console.error("Error loading navbar logo:", error);
    return "/images/SJU_ACM_Logo.png";
  }
}

// Server component that combines the logo fetching with the client component
export async function Navbar({ className }: { className?: string }) {
  const logoUrl = await NavbarLogo();

  return <NavbarClient logoUrl={logoUrl} className={className} />;
}
