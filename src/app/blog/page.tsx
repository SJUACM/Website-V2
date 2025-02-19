import { getAllPosts } from "@/lib/contentful";
import { BlogCard } from "./components/BlogCard";
import { MobileBlogCard } from "./components/MobileBlogCard";

export default async function Blog() {
  const posts = await getAllPosts();

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
}
