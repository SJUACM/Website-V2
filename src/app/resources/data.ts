import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Resource {
  title: string;
  description: string;
  link: string;
  icon?: IconProp;
}

export const helpfulWebsites: Resource[] = [
  {
    title: "TryHackMe",
    description: "Learn cybersecurity through hands-on exercises",
    link: "https://tryhackme.com",
  },
  // ... rest of the websites from the helpful-websites page
];

export const youtubeChannels: Resource[] = [
  {
    title: "NetworkChuck",
    description: "Engaging cybersecurity and networking tutorials",
    link: "https://www.youtube.com/@NetworkChuck",
  },
  // ... rest of the channels from the youtube-channels page
];

export const interviewResources: Resource[] = [
  {
    title: "Python Course for Beginners",
    description: "A 4-hour-long free course that teaches you all the Python fundamentals.",
    link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
  },
  // ... rest of the interview resources
]; 