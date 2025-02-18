import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Resource {
  title: string;
  description: string;
  link: string;
  icon?: IconProp;
}

export const helpfulWebsites: Resource[] = [
  {
    title: "CompTIA Security+ Training",
    description: "Free CompTIA Security+ SY0-701 Training Course!",
    link: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus/",
  },
  {
    title: "TryHackMe",
    description: "Learn cybersecurity through hands-on exercises and labs. Great for beginners!",
    link: "https://tryhackme.com",
  },
  {
    title: "HackTheBox",
    description: "Advanced penetration testing labs and challenges for cybersecurity enthusiasts.",
    link: "https://www.hackthebox.com",
  },
  {
    title: "OverTheWire",
    description: "Learn and practice security concepts through fun wargames.",
    link: "https://overthewire.org",
  },
  {
    title: "freeCodeCamp",
    description: "Free coding bootcamp covering web development, JavaScript, and more.",
    link: "https://www.freecodecamp.org",
  },
  {
    title: "The Odin Project",
    description: "Free full-stack curriculum teaching web development from ground up.",
    link: "https://www.theodinproject.com",
  },
  {
    title: "MDN Web Docs",
    description: "Comprehensive documentation and guides for web technologies.",
    link: "https://developer.mozilla.org",
  },
  {
    title: "W3Schools",
    description: "Simple tutorials and references for web development technologies.",
    link: "https://www.w3schools.com",
  },
  {
    title: "Codecademy",
    description: "Interactive platform for learning various programming languages.",
    link: "https://www.codecademy.com",
  },
  {
    title: "GitHub Student Pack",
    description: "Free developer tools and services for students.",
    link: "https://education.github.com/pack",
  }
];

export const youtubeChannels: Resource[] = [
  {
    title: "NetworkChuck",
    description: "Engaging cybersecurity and networking tutorials",
    link: "https://www.youtube.com/@NetworkChuck",
  },
  {
    title: "freeCodeCamp",
    description: "Comprehensive programming tutorials and courses",
    link: "https://www.youtube.com/@freecodecamp",
  },
  {
    title: "Fireship",
    description: "Quick, practical web development tutorials and tech news",
    link: "https://www.youtube.com/@Fireship",
  },
  {
    title: "Traversy Media",
    description: "Web development tutorials and project walkthroughs",
    link: "https://www.youtube.com/@TraversyMedia",
  },
  {
    title: "The Net Ninja",
    description: "Detailed web development tutorials and courses",
    link: "https://www.youtube.com/@NetNinja",
  },
  {
    title: "Web Dev Simplified",
    description: "Clear explanations of web development concepts",
    link: "https://www.youtube.com/@WebDevSimplified",
  },
  {
    title: "Kevin Powell",
    description: "CSS tutorials and web design techniques",
    link: "https://www.youtube.com/@KevinPowell",
  },
  {
    title: "Computerphile",
    description: "In-depth computer science concepts and theory",
    link: "https://www.youtube.com/@Computerphile",
  },
  {
    title: "ThePrimeagen",
    description: "Advanced programming concepts and developer productivity",
    link: "https://www.youtube.com/@ThePrimeagen",
  }
];

export const interviewResources: Resource[] = [
  {
    title: "Python Course for Beginners",
    description: "A 4-hour-long free course that teaches you all the Python fundamentals.",
    link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
  },
  {
    title: "NeetCode",
    description: "One of the best websites to use for technical interview prep. NeetCode provides a roadmap to help you practice for those interviews.",
    link: "https://www.youtube.com/c/neetcode",
  },
  {
    title: "LeetCode",
    description: "The most popular platform for technical interview preparation with thousands of coding problems and company-specific questions.",
    link: "https://leetcode.com",
  },
  {
    title: "Blind 75 LeetCode Questions",
    description: "A curated list of 75 most important coding interview questions in tech interviews.",
    link: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions",
  },
  {
    title: "HackerRank",
    description: "Practice coding, prepare for interviews, and get hired. Great platform for beginners with structured learning paths.",
    link: "https://www.hackerrank.com",
  },
  {
    title: "AlgoExpert (Free Problems)",
    description: "Platform with high-quality coding interview questions. Some problems are free to access!",
    link: "https://www.algoexpert.io",
  },
  {
    title: "GeeksforGeeks",
    description: "Comprehensive resource for computer science concepts, coding problems, and interview preparation materials.",
    link: "https://www.geeksforgeeks.org",
  },
  {
    title: "InterviewBit",
    description: "Free platform offering programming interview questions and a structured study plan for interview preparation.",
    link: "https://www.interviewbit.com",
  },
  {
    title: "Project Euler",
    description: "Collection of computational problems intended to be solved with computer programs. Great for improving problem-solving skills.",
    link: "https://projecteuler.net",
  },
  {
    title: "CSES Problem Set",
    description: "A collection of algorithmic programming problems to help you master common algorithms and data structures.",
    link: "https://cses.fi/problemset",
  },
  {
    title: "Grind 75",
    description: "An improved version of Blind 75 with customizable study plans based on your interview timeline.",
    link: "https://www.techinterviewhandbook.org/grind75",
  },
  {
    title: "Tech Interview Handbook",
    description: "Comprehensive guide covering algorithms, behavioral questions, and interview preparation strategies.",
    link: "https://www.techinterviewhandbook.org",
  },
  {
    title: "System Design Primer",
    description: "Learn how to design large-scale systems. Prep for system design interviews with real-world architectures.",
    link: "https://github.com/donnemartin/system-design-primer",
  },
  {
    title: "Pramp",
    description: "Practice mock interviews with peers. Free platform for technical and behavioral interview practice.",
    link: "https://www.pramp.com",
  },
  {
    title: "interviewing.io",
    description: "Practice technical interviews with engineers from top companies. Anonymous practice interviews.",
    link: "https://interviewing.io",
  }
];