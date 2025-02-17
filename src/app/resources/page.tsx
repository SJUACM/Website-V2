"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Resources() {
  const router = useRouter();

  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Resources</h1>
      <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-16">
        STJ ACM provides a collection of tools and materials to help students develop their skills. Whether you're preparing for interviews, expanding your knowledge, or looking for expert insights, these resources will support your learning journey.
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <button 
          className="px-10 py-4 rounded-full border-0 bg-white text-black shadow-sm 
                   uppercase tracking-wider text-sm transition-all duration-500 ease-in-out
                   hover:tracking-widest hover:bg-red-500 hover:text-white
                   hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                   active:transform active:translate-y-2.5 active:shadow-none
                   active:transition-[100ms]"
          onClick={() => router.push('/resources/interview-prep')}
        >
          Technical Interview Prep
        </button>

        <button 
          className="px-10 py-4 rounded-full border-0 bg-white text-black shadow-sm 
                   uppercase tracking-wider text-sm transition-all duration-500 ease-in-out
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
