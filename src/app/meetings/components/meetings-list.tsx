import React from "react";
import Meeting from "../../components/meeting";
import { Meeting as MeetingType } from "@/lib/contentful";

interface MeetingsListProps {
  meetings: MeetingType[];
}

export default function MeetingsList({ meetings }: MeetingsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden w-full">
      {meetings.map(meeting => {
        // Process slides data - check both slides and slidesUrl fields
        let slides;
        if (meeting.fields.slidesUrl) {
          // Use the direct URL if available
          slides = meeting.fields.slidesUrl;
        } else if (meeting.fields.slides) {
          // Fall back to the media asset if available
          slides = `https:${meeting.fields.slides.fields.file.url}`;
        }
        
        return (
          <Meeting
            key={meeting.sys.id}
            title={meeting.fields.title}
            date={new Date(meeting.fields.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            })}
            image={`https:${meeting.fields.image.fields.file.url}`}
            description={meeting.fields.description}
            meetingLocation={meeting.fields.meetingLocation}
            slides={slides}
            recording={meeting.fields.recording}
          />
        );
      })}
    </div>
  );
}
