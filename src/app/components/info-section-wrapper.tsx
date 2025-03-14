import React from "react";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";
import { InfoSectionClient } from "./info-section";

export default async function InfoSectionWrapper() {
  try {
    console.log("Fetching Expanding Knowledge Graphic...");
    const graphicData = await getLandingPageGraphicByTitle(
      "Expanding Knowledge Graphic"
    );

    let graphicUrl = "/images/acm-graphic.png"; // Default fallback

    // Check both image and graphic fields
    if (graphicData?.fields?.image?.fields?.file?.url) {
      graphicUrl = graphicData.fields.image.fields.file.url;
      console.log(
        "Found expanding knowledge graphic URL in image field:",
        graphicUrl
      );
    } else if (graphicData?.fields?.graphic?.fields?.file?.url) {
      graphicUrl = graphicData.fields.graphic.fields.file.url;
      console.log(
        "Found expanding knowledge graphic URL in graphic field:",
        graphicUrl
      );
    }

    // Handle different URL formats
    if (
      graphicUrl &&
      !graphicUrl.startsWith("http") &&
      !graphicUrl.startsWith("/")
    ) {
      graphicUrl = `https:${graphicUrl}`;
    }

    console.log("Final expanding knowledge graphic URL:", graphicUrl);

    return <InfoSectionClient graphicUrl={graphicUrl} />;
  } catch (error) {
    console.error("Error loading expanding knowledge graphic:", error);
    return <InfoSectionClient graphicUrl="/images/acm-graphic.png" />;
  }
}
