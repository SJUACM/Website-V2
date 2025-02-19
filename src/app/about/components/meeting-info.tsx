import Image from "next/image";
import LabPic from "../../../../public/images/ctf24.jpg";

export function MeetingInfo() {
  return (
    <div className="relative p-6 md:p-12 mb-12 md:mb-20">
      {/* Desktop gradient background - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 rounded-xl border border-neutral-800/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-50"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
            Join Our Community
          </h2>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Operating under the Collins College of Professional Studies, SJU ACM
            is moderated by Dr. Joan DeBello and is supported by Professors
            across the Computer Science & Cyber Security departments.
          </p>

          {/* Meeting info box - styled differently for mobile */}
          <div className="space-y-4 md:bg-black/30 md:p-6 rounded-lg md:border md:border-neutral-800 md:backdrop-blur-sm">
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
              Our meetings are held on Thursdays during Common Hour (2:00 - 3:00
              PM) in the Cyber Security Lab (Room 2-140A in St. Augustine)
            </p>

            <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-medium">
              Our meetings are open to everyone, regardless of major or
              experience. We welcome everyone to join our community!
            </p>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
          <Image
            src={LabPic}
            alt="SJU Cyber Security Lab"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
