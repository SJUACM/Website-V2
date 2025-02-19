import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import type { BlogPost } from "@/lib/contentful";
import { Options } from "@contentful/rich-text-react-renderer";

type BlogContentProps = {
  post: BlogPost;
};

export function BlogContent({ post }: BlogContentProps) {
  const renderOptions: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { url, title, width, height } = node.data.target.fields.file;
        return (
          <div className="my-8">
            <Image
              src={`https:${url}`}
              alt={title || "Blog image"}
              width={width || 800}
              height={height || 400}
              className="rounded-lg w-full"
            />
          </div>
        );
      },
    },
  };

  return (
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
      {documentToReactComponents(post.fields.content, renderOptions)}
    </article>
  );
}
