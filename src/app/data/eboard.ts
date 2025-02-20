import { StaticImageData } from "next/image";
import Tomas from "../../../public/images/eboard/tomas.png";
import Hinna from "../../../public/images/eboard/hinna.png";
import Richard from "../../../public/images/eboard/richard.png";
import David from "../../../public/images/eboard/david.png";
import Jennifer from "../../../public/images/eboard/jenn.png";
import Jatsu from "../../../public/images/eboard/jatsu.png";
import Geo from "../../../public/images/eboard/geo.png";
import Fahmid from "../../../public/images/eboard/fahmid.png";
import Jake from "../../../public/images/eboard/jake.png";
import Raymond from "../../../public/images/eboard/raymond.png";
import Amrita from "../../../public/images/eboard/amrita.png";
import Benjamin from "../../../public/images/eboard/ben.png";
import Aqueena from "../../../public/images/eboard/aqueena.png";
import Fairooz from "../../../public/images/eboard/fairooz.png";
import Ignacio from "../../../public/images/eboard/ignacio.png";
import Teuta from "../../../public/images/eboard/teuta.png";
import Kat from "../../../public/images/eboard/kat.png";
import Faizan from "../../../public/images/eboard/faizan.png";
import Thomas from "../../../public/images/eboard/thomas.png";
import Ava from "../../../public/images/eboard/ava.png";
import Jade from "../../../public/images/eboard/jade.png";

export interface EboardMemberData {
  name: string;
  position: string;
  image: StaticImageData;
  description: string;
  linkedin: string;
  github?: string;
  year?: string;
}

export const currentEboard: EboardMemberData[] = [
  {
    name: "Tomas Santos Yciano",
    position: "President",
    image: Tomas,
    description: "Launch Intern @ EY",
    linkedin: "https://www.linkedin.com/in/tjsy/",
    github: "https://github.com/tomassantos484",
  },
  {
    name: "David Rosoff",
    position: "Vice President",
    image: David,
    description: "Global Threat Emulation @ Sony",
    linkedin: "https://www.linkedin.com/in/davidrosoff/",
    github: "https://github.com/ThePurpleTux",
  },
  {
    name: "Hinna Zeejah",
    position: "Information Officer",
    image: Hinna,
    description: "Google Summer of Code' 24",
    linkedin: "https://www.linkedin.com/in/hinna-zeejah/",
    github: "https://github.com/HinnaZeejah",
  },
  {
    name: "Richard Perez",
    position: "Treasurer",
    image: Richard,
    description: "Lead Instructor, All Star Code",
    linkedin: "https://www.linkedin.com/in/richard-perez-jr/",
    github: "https://github.com/richardp23",
  },
  {
    name: "Jennifer Venus",
    position: "Social Media Chair",
    image: Jennifer,
    description: "Intern @ National Grid",
    linkedin: "https://www.linkedin.com/in/jennifervenus/",
    github: "https://github.com/jenniferVenus",
  },
  {
    name: "Gabriel Paredes",
    position: "Events Coordinator",
    image: Jatsu,
    description: "Co-Captain of the STJ CyberStorm",
    linkedin: "https://www.linkedin.com/in/gpred/",
    github: "https://github.com/JatsuLC",
  },
  {
    name: "Geovani Tzul",
    position: "Committee Chair",
    image: Geo,
    description: "SWE Fellow @ Headstarter",
    linkedin: "https://www.linkedin.com/in/geo-tzul/",
    github: "https://github.com/NYgeo",
  },
  {
    name: "Fahmid Zaman",
    position: "Committee Chair",
    image: Fahmid,
    description: "Pursuing Security+ Certification",
    linkedin: "https://www.linkedin.com/in/fahmidzaman/",
  },
];

export const pastEboard: EboardMemberData[] = [
  {
    name: "Raymond Ramdat",
    position: "President",
    image: Raymond,
    description: "2024",
    linkedin: "https://www.linkedin.com/in/raymondramdat/",
    year: "2024",
  },
  {
    name: "Jake Enea",
    position: "Vice President",
    image: Jake,
    description: "2024",
    linkedin: "https://www.linkedin.com/in/jakeenea/",
    github: "https://github.com/jakeenea51",
    year: "2024",
  },
  {
    name: "Amrita Kaur",
    position: "Events Coordinator",
    image: Amrita,
    description: "2024",
    linkedin: "https://www.linkedin.com/in/amrita-priya-kaur75/",
    year: "2024",
  },
  {
    name: "Benjamin Hanim",
    position: "Committee Chair",
    image: Benjamin,
    description: "2024",
    linkedin: "https://www.linkedin.com/in/benjamin-hanim/",
    github: "https://github.com/ben45123",
    year: "2024",
  },
  {
    name: "Aqueena Alexander",
    position: "Social Media",
    image: Aqueena,
    description: "2024",
    linkedin: "https://www.linkedin.com/in/aqueena-alexander/",
    year: "2024",
  },
  {
    name: "Fairooz Bintye Ehsan",
    position: "Events Coordinator",
    image: Fairooz,
    description: "2024",
    linkedin: "https://www.linkedin.com/in/fairooz-bintye-ehsan/",
    year: "2024",
  },
  {
    name: "Ignacio Sanchez",
    position: "Committee Chair",
    image: Ignacio,
    description: "2023",
    linkedin: "https://www.linkedin.com/in/ignacio-antequera/",
    github: "https://github.com/Ignacio-Antequera",
    year: "2023",
  },
  {
    name: "Teuta Elezaj",
    position: "Vice President",
    image: Teuta,
    description: "2023",
    linkedin: "https://www.linkedin.com/in/teutaelezaj/",
    github: "https://github.com/teutaelezaj",
    year: "2023",
  },
  {
    name: "Katarina Kobetitsch",
    position: "Social Media",
    image: Kat,
    description: "2023",
    linkedin: "https://www.linkedin.com/in/katarina-kobetitsch/",
    year: "2023",
  },
  {
    name: "Faizan Ahmed",
    position: "President",
    image: Faizan,
    description: "2022",
    linkedin: "https://www.linkedin.com/in/faizancodes/",
    github: "https://github.com/faizancodes",
    year: "2022",
  },
  {
    name: "Thomas Latona",
    position: "Vice President",
    image: Thomas,
    description: "2022",
    linkedin: "https://www.linkedin.com/in/thomaslatona/",
    year: "2022",
  },
  {
    name: "Ava McNevin",
    position: "Committee Chair",
    image: Ava,
    description: "2022",
    linkedin: "https://www.linkedin.com/in/ava-mcnevin/",
    year: "2022",
  },
  {
    name: "Jade Deo",
    position: "Social Media",
    image: Jade,
    description: "2022",
    linkedin: "https://www.linkedin.com/in/jadedeo/",
    year: "2022",
  },
];
