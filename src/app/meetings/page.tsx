import Meeting from "../components/meeting";
import AWS from "../../../public/images/AWS_1.jpg";
import Clue from "../../../public/images/Clue_Pt2_1.jpg";
import CTF from "../../../public/images/ctf24.jpg";
import FallKickoff24 from "../../../public/images/fallkickoff24.jpg";
import Resumefall24 from "../../../public/images/resumewrkshopfall24.jpg";
import AIandYoufall24 from "../../../public/images/aitoolsfall24.jpg";
import Figmafall24 from "../../../public/images/figmafall24.jpg";
import Minecraft24 from "../../../public/images/cloudessentials24.jpg";
import AWSFall24 from "../../../public/images/awsfall24.jpg";
import Linuxspring25 from "../../../public/images/linux.jpg";
import Hackingrecon24 from "../../../public/images/hackingrecon24.jpg";
import BenAI24 from "../../../public/images/benaimeeting24.jpg";
import Webportfolio24 from "../../../public/images/geowebportfall24.jpg";
import Brainrot24 from "../../../public/images/brainrotfall24.jpg";

export default function Meetings() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-4">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Meetings</h1>
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Meeting
            title="Introduction to Linux"
            date="2/7/2025"
            image={Linuxspring25}
            description="Gabriel and David led an Introduction to Linux lab, teaching essential commands, file navigation, and system management. The hands-on session helped students build foundational Linux skills."
          />
          <Meeting
            title="Spring 2025 Kickoff"
            date="1/30/2025"
            image={Clue}
            description="We kicked off the spring semester with a meeting introducing the e-board and upcoming events. The session ended with a fun Kahoot game to engage our members!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="Fireside Chat"
            date="12/2/2024"
            image={Clue}
            description="We held a meeting to recap the fall semester, share experiences, and offer students advice on their academic and professional paths—all while enjoying donuts!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Meeting
            title="Brainrot Video Workshop"
            date="11/25/2024"
            image={Brainrot24}
            description="Faizan, co-founder of HeadStarter and former ACM president, led a workshop on creating brainrot videos, AI models, and video processing techniques."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="Building Your Web Portfolio!"
            date="11/21/2024"
            image={Webportfolio24}
            description="Geo, ACM Committee Chair, led a web portfolio workshop where students built and launched their own personal sites from scratch, learning basic web development skills."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="How To Use AI in Tech"
            date="11/18/2024"
            image={BenAI24}
            description="As former ACM committee chair, Ben taught students how to use AI tools like ChatGPT to improve everyone's coding efficiency."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Meeting
            title="Hacking From Scratch: Exploitation"
            date="11/7/2024"
            image={Clue}
            description="In David's second Hacking from Scratch workshop, students used their gathered data to identify and exploit vulnerabilities, gaining hands-on experience in controlled, ethical hacking!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="Hacking From Scratch: Reconnaissance"
            date="10/31/2024"
            image={Hackingrecon24}
            description="David kicked off his Hacking from Scratch series with a workshop on reconnaissance, teaching students how to gather information, map targets, and identify vulnerabilities."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="STJ ACM x AWS Hands-On Workshop"
            date="10/28/2024"
            image={AWSFall24}
            description="In this workshop, DeJonte, an AWS Solutions Architect & SJU Alum, and his team introduced attendees to AWS fundamentals and demonstrated the power of Generative AI with real-world applications."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Meeting
            title="Cloud Essentials With AWS and Minecraft"
            date="10/17/2024"
            image={Minecraft24}
            description="In this meeting, ACM Treaurer, Richard, demonstrated the basics of cloud computing using AWS and Minecraft. Attendees learned how to set up and configure an AWS server, and then connected it to their own Minecraft servers!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="Design Thinking With Figma"
            date="10/10/2024"
            image={Figmafall24}
            description="ACM President Tomas led a hands-on UI/UX workshop on Figma, covering design principles and tools. Students competed to design the best login page, with the winner receiving free Discord Nitro!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="AI, and YOU!"
            date="10/3/2024"
            image={AIandYoufall24}
            description="Treasurer Richard showcased advanced AI techniques, teaching attendees how to use AI tools to boost productivity and tackle complex tasks. The workshop covered various AI platforms and practical strategies for tech applications."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
        </div>

        {/* Fifth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Meeting
            title="Resume + LinkedIn Workshop"
            date="9/18/2024"
            image={Resumefall24}
            description="In this workshop, our Information Officer, Hinna, provided students with a guide to crafting good resumes and LinkedIn profiles. Our members learned about the importance of a strong online presence in the job market and how to use LinkedIn to its full potential."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="Fall 2024 Kickoff"
            date="9/12/2024"
            image={FallKickoff24}
            description="STJ ACM kicked off the academic year with a BANG! We welcomed new and returning members to the club by presenting the new E-Board, discussing the club's plans for the year, and doing a TryHackMe room together as a group!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
          <Meeting
            title="Capture The Flag!"
            date="4/29/2024"
            image={CTF}
            description="ACM hosted a Capture the Flag workshop to wrap up the semester with a fun cybersecurity and computer science challenge. The winner received a prize!"
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
          />
        </div>

        {/* Sixth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Meeting
            title="AWS Career Insight + GenAI Info Session"
            date="4/25/2024"
            image={AWS}
            description="In this event, DeJonte, an AWS Solutions Architect & SJU Alum, alongside his colleagues, provided attendees with a comprehensive overview of the AWS platform and a captivating Gen Al demonstration."
            slides="https://www.sjuacm.com/static/media/SJU_ACM_Clue_Pt2_Slides.f9bb5bd8bbf42fadb95b.pdf"
            recording="https://youtu.be/fjgw7Md_-jE?si=Op3Ij8DcqYpXQy7R"
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
    </div>
  );
}
