"use client";

import { Comfortaa } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={isHomePage ? "home-page" : "overflow-x-hidden"}
    >
      <head>
        <title>SJU ACM Website</title>
        <meta name="description" content="SJU ACM Website" />
      </head>
      <body 
        suppressHydrationWarning 
        className={`${comfortaa.className} ${isHomePage ? "home-page-body" : "overflow-x-hidden max-w-[100vw]"}`}
      >
        <div className={isHomePage ? "" : "overflow-x-hidden"}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
