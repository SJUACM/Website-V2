"use client";
import React, { useEffect, useState } from "react";
import { BlogPost, getAllPosts } from "@/lib/contentful";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[600px] rounded-xl p-6 border">
        {post.fields.coverImage && (
          <CardItem
            translateZ="100"
            className="w-full h-64 mb-6 rounded-lg overflow-hidden"
          >
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.coverImage.fields.title || post.fields.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-200 group-hover/card:scale-105"
            />
          </CardItem>
        )}
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-200 mb-4 line-clamp-2"
        >
          {post.fields.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm mb-8 line-clamp-3"
        >
          {post.fields.excerpt}
        </CardItem>
        <CardItem
          translateZ="40"
          className="absolute bottom-6 left-6 right-6 space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 text-sm">By</span>
              <span className="text-neutral-200 text-sm font-medium">
                {post.fields.author}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 text-sm">Published on</span>
              <span className="text-neutral-200 text-sm font-medium">
                {new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
          <Link
            href={`/blog/${post.fields.slug}`}
            className="block text-center py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
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

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div className="pt-4 md:pt-2 px-8 sm:px-8 max-w-7xl mx-auto">
      {/* Mobile-optimized blog list with adjusted spacing */}
      <div className="space-y-12 mb-16 md:hidden">
        {posts.map((post, index) => (
          <div key={post.sys.id} className={`${index !== posts.length - 1 ? 'border-b border-neutral-800 pb-12' : ''}`}>
            <MobileBlogCard post={post} />
          </div>
        ))}
      </div>

      {/* Desktop 3D cards grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function MobileBlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.fields.slug}`}>
      <div className="bg-black/40 border border-neutral-800 rounded-lg overflow-hidden">
        {post.fields.coverImage && (
          <div className="aspect-video relative">
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.coverImage.fields.title || post.fields.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            {post.fields.title}
          </h2>
          
          <div className="flex items-center text-sm text-neutral-400 mb-4">
            <span>{new Date(post.fields.publishDate).toLocaleDateString()}</span>
            {post.fields.author && (
              <>
                <span className="mx-2">•</span>
                <span>{post.fields.author}</span>
              </>
            )}
          </div>
          
          <p className="text-sm text-neutral-300 line-clamp-3 mb-6">
            {post.fields.excerpt}
          </p>
          
          <span className="text-red-500 text-sm font-medium inline-flex items-center">
            Read More 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
