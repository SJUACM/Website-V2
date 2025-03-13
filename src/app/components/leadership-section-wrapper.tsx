import React from "react";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";
import { LeadershipSectionClient } from "./leadership-section";

export default async function LeadershipSectionWrapper() {
  try {
    console.log("Fetching Leadership Graphic...");
    const graphicData = await getLandingPageGraphicByTitle("Leadership Graphic");
    
    let graphicUrl = "/images/eboard-graphic.png"; // Default fallback
    
    // Check both image and graphic fields
    if (graphicData?.fields?.image?.fields?.file?.url) {
      graphicUrl = graphicData.fields.image.fields.file.url;
      console.log("Found leadership graphic URL in image field:", graphicUrl);
    } else if (graphicData?.fields?.graphic?.fields?.file?.url) {
      graphicUrl = graphicData.fields.graphic.fields.file.url;
      console.log("Found leadership graphic URL in graphic field:", graphicUrl);
    }
    
    // Handle different URL formats
    if (graphicUrl && !graphicUrl.startsWith("http") && !graphicUrl.startsWith("/")) {
      graphicUrl = `https:${graphicUrl}`;
    }
    
    console.log("Final leadership graphic URL:", graphicUrl);
    
    return <LeadershipSectionClient graphicUrl={graphicUrl} />;
  } catch (error) {
    console.error("Error loading leadership graphic:", error);
    return <LeadershipSectionClient graphicUrl="/images/eboard-graphic.png" />;
  }
} 