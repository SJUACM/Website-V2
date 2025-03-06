import React from "react";
import { getAllHackathons, getHackathonBySlug } from "../../../lib/contentful";
import { notFound } from "next/navigation";
import HackathonDetail from "../../components/hackathon-detail";

export const revalidate = 3600; // Revalidate every hour

interface HackathonPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const hackathons = await getAllHackathons();
  return hackathons.map(hackathon => ({
    slug: hackathon.sys.id,
  }));
}

export default async function HackathonPage({ params }: HackathonPageProps) {
  const { slug } = params;
  console.log(`Page requested for slug: ${slug}`);
  
  const hackathon = await getHackathonBySlug(slug);
  
  console.log(`Hackathon found: ${!!hackathon}`);

  if (!hackathon) {
    console.log(`No hackathon found for slug: ${slug}, returning 404`);
    return notFound();
  }

  return <HackathonDetail hackathon={hackathon} />;
} 