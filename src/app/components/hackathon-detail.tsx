import React from "react";
import Link from "next/link";
import styles from "../styles/customFont.module.css";
import { Hackathon } from "../../lib/contentful";
import { formatDateRange } from "../../lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

interface HackathonDetailProps {
  hackathon: Hackathon;
}

export default function HackathonDetail({ hackathon }: HackathonDetailProps) {
  const imageUrl = hackathon.fields.image?.fields.file.url || '';
  
  // Handle missing date fields
  const formattedDate = hackathon.fields.startDate && hackathon.fields.endDate
    ? formatDateRange(hackathon.fields.startDate, hackathon.fields.endDate)
    : 'Date TBD';
    
  // Default to 'upcoming' if status is missing
  const status = hackathon.fields.status || 'upcoming';

  // Rich text options for rendering the details
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a 
          href={node.data.uri} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-500 underline"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <div className="py-12">
        <Link
          href="/hackathons"
          className="text-red-400 hover:text-red-500 flex items-center mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Hackathons
        </Link>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https:${imageUrl})` }}
          />
          {status !== 'past' && (
            <div className={`absolute top-4 right-4 z-20 ${
              status === 'ongoing' ? 'bg-green-600' : 'bg-red-600'
            } text-white text-sm font-bold px-4 py-2 rounded-full`}>
              {status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1
              className={`text-3xl md:text-4xl font-bold ${styles.customFont}`}
            >
              {hackathon.fields.title}
            </h1>
            <span className="mt-2 md:mt-0 text-red-400 bg-red-950/30 px-4 py-2 rounded-full">
              {formattedDate}
            </span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">{hackathon.fields.description}</p>

            {/* Registration button for upcoming hackathons */}
            {status === 'upcoming' && hackathon.fields.registrationLink && (
              <div className="my-8">
                <a
                  href={hackathon.fields.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg inline-block transition-colors"
                >
                  Register Now
                </a>
              </div>
            )}

            {/* Rich text content */}
            {hackathon.fields.details ? (
              <div className="mt-8">
                {documentToReactComponents(hackathon.fields.details, options)}
              </div>
            ) : (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mt-8 mb-4">Event Details</h2>
                <p>More details about this hackathon will be available soon.</p>
              </div>
            )}

            {/* Discord link */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <p className="mb-4">
                Join our Discord server to connect with other participants and stay updated on our events.
              </p>
              <a
                href="https://discord.gg/8EJVY5Hq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg inline-block transition-colors"
              >
                Join Our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
