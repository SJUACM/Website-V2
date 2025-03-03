import React from "react";
import { hackathons, upcomingHackathons } from "../../data/hackathons";
import styles from "../../styles/customFont.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const hackathon = [...hackathons, ...upcomingHackathons].find(h => h.id === params.id);
  
  if (!hackathon) {
    return {
      title: "Hackathon Not Found",
    };
  }
  
  return {
    title: `${hackathon.title} | STJ ACM`,
    description: hackathon.description,
  };
}

export default function HackathonPage({ params }: { params: { id: string } }) {
  const hackathon = [...hackathons, ...upcomingHackathons].find(h => h.id === params.id);
  
  if (!hackathon) {
    notFound();
  }

  const isUpcoming = 'isUpcoming' in hackathon && Boolean(hackathon.isUpcoming);

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
          {isUpcoming && (
            <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
              Upcoming
            </div>
          )}
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
            {isUpcoming ? (
              <>
                <p className="text-lg">
                  {hackathon.description}
                </p>
                <h2>Event Details</h2>
                <ul>
                  <li><strong>Date:</strong> April 2025 (Exact dates TBA)</li>
                  <li><strong>Location:</strong> St. John&apos;s University, Queens Campus</li>
                  <li><strong>Theme:</strong> Artificial Intelligence & Machine Learning</li>
                </ul>
                
                <h2>What to Expect</h2>
                <p>
                  Our AI Hackathon will bring together students from various disciplines to develop innovative AI solutions. 
                  Participants will have the opportunity to work with cutting-edge AI technologies, receive mentorship from 
                  industry professionals, and compete for prizes.
                </p>
                
                <h2>Registration</h2>
                <p>
                  Registration will open in early 2025. Join our Discord server to be notified when registration begins.
                </p>
                
                <div className="mt-8">
                  <a 
                    href="https://discord.gg/8EJVY5Hq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg inline-block transition-colors"
                  >
                    Join Our Discord
                  </a>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg">
                  {hackathon.description}
                </p>
                
                {hackathon.id === "ai-hackathon-2024" && (
                  <>
                    <h2>Event Highlights</h2>
                    <p>
                      Our Spring 2024 AI Hackathon was a tremendous success, with over 50 participants forming 12 teams to 
                      develop innovative AI solutions. The event was sponsored by Headstarter and featured mentors from 
                      leading tech companies.
                    </p>
                    
                    <h2>Winning Projects</h2>
                    <ul>
                      <li><strong>First Place:</strong> AI-powered accessibility tool for visually impaired users</li>
                      <li><strong>Second Place:</strong> Natural language processing application for medical records</li>
                      <li><strong>Third Place:</strong> Machine learning model for predicting student success</li>
                    </ul>
                    
                    <p>
                      We look forward to hosting more AI-focused events in the future. Stay tuned for our upcoming 
                      AI Hackathon in Spring 2025!
                    </p>
                  </>
                )}
                
                {hackathon.id === "web-dev-hackathon-2023" && (
                  <>
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
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 