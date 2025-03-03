import React from "react";
import { hackathons, upcomingHackathons } from "../../data/hackathons";
import HackathonDetail from "../../components/hackathon-detail";
import { notFound } from "next/navigation";

interface HackathonPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  const allHackathonIds = [
    ...hackathons.map(h => ({ id: h.id })),
    ...upcomingHackathons.map(h => ({ id: h.id })),
  ];

  return allHackathonIds;
}

export default async function HackathonPage({ params }: HackathonPageProps) {
  const { id } = await params;

  // Check if the hackathon exists
  const hackathonExists =
    hackathons.some(h => h.id === id) ||
    upcomingHackathons.some(h => h.id === id);

  if (!hackathonExists) {
    return notFound();
  }

  return <HackathonDetail hackathonId={id} />;
}
