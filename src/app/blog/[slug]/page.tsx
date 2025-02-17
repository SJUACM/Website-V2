"use client";
import React, { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/contentful";
import { getPostBySlug } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const blogPost = await getPostBySlug(params.slug);
        setPost(blogPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center mt-8">Post not found</div>;
  }

  return (
    <div className="mt-[-100px] max-w-4xl mx-auto px-8">
      <article className="prose prose-invert prose-lg">
        {post.fields.coverImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.coverImage.fields.title || post.fields.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
        <div className="flex justify-between text-neutral-400 mb-8">
          <span>{post.fields.author}</span>
          <span>{new Date(post.fields.publishDate).toLocaleDateString()}</span>
        </div>
        {documentToReactComponents(post.fields.content)}
      </article>
    </div>
  );
} 