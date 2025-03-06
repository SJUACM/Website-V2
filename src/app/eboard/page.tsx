import React from "react";
import styles from "../styles/customFont.module.css";
import { MobileEboardMember } from "./components/MobileEboardMember";
import { MobilePastEboardMember } from "./components/MobilePastEboardMember";
import { EboardMember } from "./components/EboardMember";
import { getCurrentEboardMembers, getPastEboardMembers } from "../../lib/contentful";

export default async function Eboard() {
  // Fetch eboard members from Contentful
  const currentEboard = await getCurrentEboardMembers();
  const pastEboard = await getPastEboardMembers();

  // Map Contentful data to the format expected by components
  const currentEboardData = currentEboard.map(member => ({
    name: member.fields.name,
    position: member.fields.position,
    description: member.fields.description,
    image: `https:${member.fields.image.fields.file.url}`,
    linkedin: member.fields.linkedin,
    github: member.fields.github,
  }));

  const pastEboardData = pastEboard.map(member => ({
    name: member.fields.name,
    position: member.fields.position,
    description: member.fields.description || '',
    image: `https:${member.fields.image.fields.file.url}`,
    linkedin: member.fields.linkedin,
    github: member.fields.github,
    year: member.fields.year || '',
  }));

  return (
    <div className="mt-[-100px] md:mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
      <div className="p-4 md:p-8">
        {/* Current E-board - Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 mb-12 md:mt-16">
          {currentEboardData.map(member => (
            <EboardMember key={member.name} {...member} />
          ))}
        </div>

        {/* Past E-board - Desktop View */}
        <div className="hidden md:block mt-32">
          <h2 className={`text-4xl font-semibold ${styles.customFont}`}>
            Past E-Board Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {pastEboardData.map(member => (
              <EboardMember key={member.name} {...member} />
            ))}
          </div>
        </div>

        {/* Mobile View - Adjusted spacing */}
        <div className="md:hidden space-y-8 mt-24">
          <div className="grid grid-cols-1 gap-8">
            {/* Current E-board section */}
            <div className="space-y-8">
              {currentEboardData.map(member => (
                <MobileEboardMember key={member.name} {...member} />
              ))}
            </div>

            {/* Past E-board section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Past E-Board Members</h2>
              <div className="space-y-6">
                {pastEboardData.map(member => (
                  <MobilePastEboardMember
                    key={member.name}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    linkedin={member.linkedin}
                    github={member.github}
                    year={member.year || member.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
