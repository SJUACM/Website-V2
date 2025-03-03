import React from "react";
import { hackathons } from "../../data/hackathons";
import styles from "../../styles/customFont.module.css";
import Link from "next/link";

export default function WebDevHackathon2023() {
  const hackathon = hackathons.find(h => h.id === "web-dev-hackathon-2023");
  
  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <div className="py-12">
        <Link href="/hackathons" className="text-red-400 hover:text-red-500 flex items-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Hackathons
        </Link>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hackathon.imagePath})` }}
          />
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold ${styles.customFont}`}>
              {hackathon.title}
            </h1>
            <span className="mt-2 md:mt-0 text-red-400 bg-red-950/30 px-4 py-2 rounded-full">
              {hackathon.date}
            </span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg">
              {hackathon.description}
            </p>
            
            <h2>Event Highlights</h2>
            <p>
              Our Fall 2023 Web Development Hackathon brought together students from various majors to build 
              web applications addressing real-world problems. Participants used modern frameworks like React, 
              Next.js, and various backend technologies.
            </p>
            
            <h2>Winning Projects</h2>
            <ul>
              <li><strong>First Place:</strong> Community resource sharing platform</li>
              <li><strong>Second Place:</strong> Student study group matching application</li>
              <li><strong>Third Place:</strong> Campus event discovery tool</li>
            </ul>
            
            <p>
              The event provided valuable hands-on experience and networking opportunities for all participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 