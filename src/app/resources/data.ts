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
  // ... rest of the interview resources
]; 