import styles from "../styles/customFont.module.css";
import { MobileEboardMember } from "./components/MobileEboardMember";
import { MobilePastEboardMember } from "./components/MobilePastEboardMember";
import { EboardMember } from "./components/EboardMember";
import { currentEboard, pastEboard } from "../data/eboard";

export default function Eboard() {
  return (
    <div className="mt-[-100px] md:mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
      <div className="p-4 md:p-8">
        {/* Current E-board - Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 mb-12 md:mt-16">
          {currentEboard.map(member => (
            <EboardMember key={member.name} {...member} />
          ))}
        </div>

        {/* Past E-board - Desktop View */}
        <div className="hidden md:block mt-32">
          <h2 className={`text-4xl font-semibold ${styles.customFont}`}>
            Past E-Board Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {pastEboard.map(member => (
              <EboardMember key={member.name} {...member} />
            ))}
          </div>
        </div>

        {/* Mobile View - Adjusted spacing */}
        <div className="md:hidden space-y-8 mt-24">
          <div className="grid grid-cols-1 gap-8">
            {/* Current E-board section */}
            <div className="space-y-8">
              {currentEboard.map(member => (
                <MobileEboardMember key={member.name} {...member} />
              ))}
            </div>

            {/* Past E-board section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Past E-Board Members</h2>
              <div className="space-y-6">
                {pastEboard.map(member => (
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
