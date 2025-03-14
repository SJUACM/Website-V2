"use client";

import { useTrackedButton } from "../hooks/useTrackedButton";
import { SOCIAL_LINKS } from "../utils/constants";

export function DiscordButton() {
  const { createClickHandler } = useTrackedButton();

  return (
    <button className="z-10 relative inline-flex h-10 xs:h-12 md:h-14 w-[120px] xs:w-[140px] md:w-[150px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs xs:text-sm font-medium text-white backdrop-blur-3xl">
        <a
          href={SOCIAL_LINKS.DISCORD}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-full"
          onClick={createClickHandler("join_discord_button_click", {
            button_location: "hero_section",
            button_text: "Join Discord",
          })}
        >
          Join Discord
        </a>
      </span>
    </button>
  );
}
