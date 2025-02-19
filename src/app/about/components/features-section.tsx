import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faLaptopCode,
  faHandshake,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FeatureCard } from "./feature-card";
import { FeatureItem } from "./feature-item";

const features = [
  {
    icon: faUsers as IconProp,
    title: "Community",
    description:
      "Join a community of tech enthusiasts, developers, and cybersecurity experts!",
  },
  {
    icon: faLaptopCode as IconProp,
    title: "Hands-on Learning",
    description:
      "Gain hands-on experience through workshops, hackathons, and projects!",
  },
  {
    icon: faHandshake as IconProp,
    title: "Industry Connections",
    description:
      "Connect with industry professionals, alumni, and employers through us!",
  },
  {
    icon: faTrophy as IconProp,
    title: "Growth Opportunities",
    description:
      "Develop leadership skills, build your portfolio, and prepare for a career!",
  },
];

export function FeaturesSection() {
  return (
    <>
      <div className="space-y-8 px-4 md:hidden">
        {features.map(feature => (
          <FeatureItem key={feature.title} {...feature} />
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-12 md:mt-8 mb-12 md:mb-20 max-w-6xl mx-auto">
        {/* Desktop View (3D Cards) - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </>
  );
}
