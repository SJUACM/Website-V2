// Define the Hackathon type
export interface Hackathon {
  id: string;
  title: string;
  date: string;
  description: string;
  imagePath: string;
  isUpcoming?: boolean;
}

// Hackathon data
export const hackathons: Hackathon[] = [
  {
    id: "ai-hackathon-2024",
    title: "2024 ACM x Headstarter AI Hackathon",
    date: "Spring 2024",
    description:
      "A collaboration with Headstarter focused on AI applications. Students built innovative projects using various AI technologies.",
    imagePath: "/images/aiHackathon1.jpg",
  },
  {
    id: "web-dev-hackathon-2023",
    title: "Web Development Hackathon",
    date: "Fall 2023",
    description:
      "Participants created web applications addressing real-world problems using modern frameworks and tools.",
    imagePath: "/images/hs_hackathon.jpg",
  },
];

// Upcoming hackathons
export const upcomingHackathons: Hackathon[] = [
  {
    id: "ai-hackathon-2025",
    title: "AI Hackathon",
    date: "April 2025",
    description:
      "Join us for our upcoming AI Hackathon where students will develop cutting-edge AI solutions to real-world problems.",
    imagePath: "/images/aiHackathon6.jpg",
    isUpcoming: true,
  },
];
