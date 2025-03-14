import React from "react";
import { NavbarClient } from "@/app/components/navbar-client";

// Server component that combines the logo fetching with the client component
export async function Navbar({ className }: { className?: string }) {
  const logoUrl = "/images/SJU_ACM_Logo.png";

  return <NavbarClient logoUrl={logoUrl} className={className} />;
}
