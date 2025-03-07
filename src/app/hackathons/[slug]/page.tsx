import React from "react";
import { getAllHackathons, getHackathonBySlug } from "../../../lib/contentful";
import { notFound } from "next/navigation";
import HackathonDetail from "../../components/hackathon-detail";

export const revalidate = 3600; // Revalidate every hour

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  try {
    const hackathons = await getAllHackathons();
    return hackathons.map(hackathon => ({
      slug: hackathon.sys.id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function HackathonPage({ params }: PageProps) {
  const { slug } = await params;

  console.log(`Page requested for slug: ${slug}`);

  const hackathon = await getHackathonBySlug(slug);

  console.log(`Hackathon found: ${!!hackathon}`);

  if (!hackathon) {
    console.log(`No hackathon found for slug: ${slug}, returning 404`);
    return notFound();
  }

  return <HackathonDetail hackathon={hackathon} />;
}
