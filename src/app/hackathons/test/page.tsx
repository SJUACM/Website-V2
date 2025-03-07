import React from "react";
import { getAllHackathons } from "../../../lib/contentful";

export default async function TestPage() {
  const hackathons = await getAllHackathons();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Hackathons Test Page</h1>

      <div className="mb-4">
        <p>Total hackathons: {hackathons.length}</p>
      </div>

      {hackathons.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Hackathon List:</h2>
          <ul className="list-disc pl-6">
            {hackathons.map(hackathon => (
              <li key={hackathon.sys.id} className="mb-2">
                <strong>{hackathon.fields.title}</strong> - Slug:{" "}
                {hackathon.fields.slug}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hackathons found in Contentful.</p>
      )}
    </div>
  );
}
