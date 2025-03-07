import { BlogPost } from "@/lib/contentful";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }: { post: BlogPost }) {
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
                {new Date(post.fields.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
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
