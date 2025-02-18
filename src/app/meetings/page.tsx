"use client";
import { useEffect, useState } from "react";
import Meeting from "../components/meeting";
import { Meeting as MeetingType, getAllMeetings } from "@/lib/contentful";

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<MeetingType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeetings() {
      try {
        const allMeetings = await getAllMeetings();
        setMeetings(allMeetings);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMeetings();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meetings.map((meeting) => (
            <Meeting
              key={meeting.sys.id}
              title={meeting.fields.title}
              date={new Date(meeting.fields.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              image={`https:${meeting.fields.image.fields.file.url}`}
              description={meeting.fields.description}
              slides={meeting.fields.slides}
              recording={meeting.fields.recording}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
