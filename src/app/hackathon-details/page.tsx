"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { hackathons, upcomingHackathons, Hackathon } from "../data/hackathons";
//import styles from "../styles/customFont.module.css";
import Link from "next/link";

export default function HackathonDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hackathon, setHackathon] = useState<Hackathon | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const id = searchParams.get('id');
    if (!id) {
      router.push('/hackathons');
      return;
    }
    
    const foundHackathon = [...hackathons, ...upcomingHackathons].find(h => h.id === id);
    if (!foundHackathon) {
      router.push('/hackathons');
      return;
    }
    
    setHackathon(foundHackathon);
    setLoading(false);
  }, [searchParams, router]);
  
  if (loading || !hackathon) {
    return <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>;
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
        
        {isUpcoming && (
          <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-400">This is an upcoming hackathon!</p>
          </div>
        )}
      </div>
    </div>
  );
} 