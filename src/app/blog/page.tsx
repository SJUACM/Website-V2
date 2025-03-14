import React from "react";
import { getAllPosts } from "@/lib/contentful";
import { BlogCard } from "./components/BlogCard";
import { MobileBlogCard } from "./components/MobileBlogCard";

// Add revalidation to prevent stale data
export const revalidate = 3600; // Revalidate every hour

export default async function Blog() {
  try {
    const posts = await getAllPosts();

    // If no posts are returned, show a placeholder message
    if (!posts || posts.length === 0) {
      return (
        <div className="pt-4 md:pt-2 px-8 sm:px-8 max-w-7xl mx-auto min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No Blog Posts Yet</h2>
            <p className="text-neutral-400">Check back soon for new content!</p>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-4 md:pt-2 px-8 sm:px-8 max-w-7xl mx-auto">
        {/* Mobile-optimized blog list with adjusted spacing */}
        <div className="space-y-12 mb-16 md:hidden">
          {posts.map((post, index) => (
            <div
              key={post.sys.id}
              className={`${index !== posts.length - 1 ? "border-b border-neutral-800 pb-12" : ""}`}
            >
              <MobileBlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Desktop 3D cards grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.sys.id} post={post} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    // Return a fallback UI in case of error
    return (
      <div className="pt-4 md:pt-2 px-8 sm:px-8 max-w-7xl mx-auto min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Unable to Load Blog Posts</h2>
          <p className="text-neutral-400">Please try again later.</p>
        </div>
      </div>
    );
  }
}
