import { getUpcomingMeetings } from "@/lib/contentful";
import { UpcomingMeetingsView } from "./upcoming-meetings-view";

export default async function UpcomingMeetings() {
  const meetings = await getUpcomingMeetings();
  const nextMeeting = meetings[0];

  if (!nextMeeting) {
    return (
      <div className="text-center mt-8">No upcoming meetings scheduled</div>
    );
  }

  return <UpcomingMeetingsView nextMeeting={nextMeeting} />;
}
