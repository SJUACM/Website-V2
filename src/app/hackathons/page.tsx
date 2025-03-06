import React from "react";
import { getHackathonsByStatus } from "../../lib/contentful";
import HackathonsList from "../../app/components/hackathons-list";

export const revalidate = 3600; // Revalidate every hour

export default async function HackathonsPage() {
  console.log("Fetching hackathons for main page");
  
  const ongoingHackathons = await getHackathonsByStatus("ongoing");
  const upcomingHackathons = await getHackathonsByStatus("upcoming");
  const pastHackathons = await getHackathonsByStatus("past");
  
  console.log(`Found ${ongoingHackathons.length} ongoing, ${upcomingHackathons.length} upcoming, and ${pastHackathons.length} past hackathons`);

  return (
    <HackathonsList 
      ongoingHackathons={ongoingHackathons}
      upcomingHackathons={upcomingHackathons}
      pastHackathons={pastHackathons}
    />
  );
}
