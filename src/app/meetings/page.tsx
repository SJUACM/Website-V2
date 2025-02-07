import Meeting from "../components/meeting";
import AWS from "../../../public/images/AWS_1.jpg";
import Clue from "../../../public/images/Clue_Pt2_1.jpg";

export default function Meetings() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center">
      <h1 className="text-4xl">Meetings</h1>
      <div className="flex flex-row items-center justify-center space-x-8">
        <Meeting
          title="AWS Career Insight + GenAI Info Session"
          date="4/25/2024"
          image={AWS}
          description="In this event, DeJonte, an AWS Solutions Architect & SJU Alum, alongside his colleagues, provided attendees with a comprehensive overview of the AWS platform and a captivating Gen AI demonstration."
        />
        <Meeting
          title="Cloud Incident Response"
          date="4/18/2024"
          image={Clue}
          description="HELP! SJU ACM has been HACKED, and members have been recruited to investigate. This time, you'll get the chance to interact with Microsoft Azure and examine an incident produced by the Sentinel SIEM!"
          slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
          recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
        />
      </div>
    </div>
  );
}
