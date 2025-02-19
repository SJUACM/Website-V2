import { BlogPost } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";

export function MobileBlogCard({ post }: { post: BlogPost }) {
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
            <span>
              {new Date(post.fields.publishDate).toLocaleDateString()}
            </span>
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
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
