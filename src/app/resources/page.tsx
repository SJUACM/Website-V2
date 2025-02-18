"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Resources() {
  const router = useRouter();

  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-4 sm:px-8">
      <div className="p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-white">
          Resources
        </h1>
        <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 sm:mb-16 leading-relaxed">
          STJ ACM provides a collection of tools and materials to help students develop their skills. 
          Whether you're preparing for interviews, expanding your knowledge, or looking for expert insights, 
          these resources will support your learning journey.
        </p>

        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <button 
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-full border-0 
                     bg-white text-black shadow-sm uppercase tracking-wide sm:tracking-wider 
                     text-xs sm:text-sm transition-all duration-500 ease-in-out
                     hover:tracking-widest hover:bg-red-500 hover:text-white
                     hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                     active:transform active:translate-y-2.5 active:shadow-none
                     active:transition-[100ms]"
            onClick={() => router.push('/resources/interview-prep')}
          >
            Technical Interview Prep
          </button>

          <button 
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-full border-0 
                     bg-white text-black shadow-sm uppercase tracking-wide sm:tracking-wider 
                     text-xs sm:text-sm transition-all duration-500 ease-in-out
                     hover:tracking-widest hover:bg-red-500 hover:text-white
                     hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                     active:transform active:translate-y-2.5 active:shadow-none
                     active:transition-[100ms]"
            onClick={() => router.push('/resources/helpful-websites')}
          >
            Helpful Websites
          </button>

          <button 
            className="px-10 py-4 rounded-full border-0 bg-white text-black shadow-sm 
                     uppercase tracking-wider text-sm transition-all duration-500 ease-in-out
                     hover:tracking-widest hover:bg-red-500 hover:text-white
                     hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                     active:transform active:translate-y-2.5 active:shadow-none
                     active:transition-[100ms]"
            onClick={() => router.push('/resources/youtube-channels')}
          >
            Youtube Channels
          </button>
        </div>
      </div>
    </div>
  );
}
