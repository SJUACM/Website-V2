"use client";
import React, { useEffect, useState } from "react";
import { BlogPost, getAllPosts } from "@/lib/contentful";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[400px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-200 mb-4"
        >
          {post.fields.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm mb-8 line-clamp-4"
        >
          {post.fields.excerpt}
        </CardItem>
        <CardItem
          translateZ="40"
          className="absolute bottom-6 left-6 right-6"
        >
          <div className="flex justify-between text-sm text-neutral-300 mb-4">
            <span>{post.fields.author}</span>
            <span>{new Date(post.fields.publishDate).toLocaleDateString()}</span>
          </div>
          <Link
            href={`/blog/${post.fields.slug}`}
            className="block text-center py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Read More
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-16">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.sys.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
