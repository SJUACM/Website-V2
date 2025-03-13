import React from "react";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";
import { ResourcesSectionClient } from "./resources-section";

export default async function ResourcesSectionWrapper() {
  try {
    console.log("Fetching Development Graphic...");
    const graphicData = await getLandingPageGraphicByTitle("Development Graphic");
    
    let graphicUrl = "/images/resources-graphic.png"; // Default fallback
    
    // Check both image and graphic fields
    if (graphicData?.fields?.image?.fields?.file?.url) {
      graphicUrl = graphicData.fields.image.fields.file.url;
      console.log("Found development graphic URL in image field:", graphicUrl);
    } else if (graphicData?.fields?.graphic?.fields?.file?.url) {
      graphicUrl = graphicData.fields.graphic.fields.file.url;
      console.log("Found development graphic URL in graphic field:", graphicUrl);
    }
    
    // Handle different URL formats
    if (graphicUrl && !graphicUrl.startsWith("http") && !graphicUrl.startsWith("/")) {
      graphicUrl = `https:${graphicUrl}`;
    }
    
    console.log("Final development graphic URL:", graphicUrl);
    
    return <ResourcesSectionClient graphicUrl={graphicUrl} />;
  } catch (error) {
    console.error("Error loading development graphic:", error);
    return <ResourcesSectionClient graphicUrl="/images/resources-graphic.png" />;
  }
} 