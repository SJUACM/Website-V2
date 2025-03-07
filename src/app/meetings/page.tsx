import { getAllMeetings } from "@/lib/contentful";
import MeetingsList from "./components/meetings-list";

export default async function MeetingsPage() {
  const meetings = await getAllMeetings();

  return (
    <div className="text-center items-center justify-center max-w-7xl mx-auto px-0 sm:px-8">
      <div className="p-0 sm:p-4 md:p-6">
        <MeetingsList meetings={meetings} />
      </div>
    </div>
  );
}
