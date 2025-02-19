import { getPostBySlug } from "@/lib/contentful";
import { BlogContent } from "./components/BlogContent";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const slug = await params;
  const post = await getPostBySlug(slug.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mt-[-100px] max-w-4xl mx-auto px-8">
      <BlogContent post={post} />
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  // You can implement this if you want to statically generate blog posts
  return [];
}
