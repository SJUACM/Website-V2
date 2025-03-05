import { createClient, EntrySkeletonType } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface BlogPost extends EntrySkeletonType {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    content: Document;
    excerpt: string;
    author: string;
    publishDate: string;
    coverImage: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
      };
    };
  };
}

export interface Meeting extends EntrySkeletonType {
  sys: {
    id: string;
  };
  contentTypeId: string;
  fields: {
    title: string;
    date: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    meetingLocation?: string;
    slides?: {
      fields: {
        file: {
          url: string;
          fileName: string;
          contentType: string;
        };
        title: string;
      };
    };
    slidesUrl?: string;
    recording?: string;
  };
}

export interface ParallaxBanner extends EntrySkeletonType {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    image: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
}

export interface EboardMember extends EntrySkeletonType {
  sys: {
    id: string;
  };
  contentTypeId: string;
  fields: {
    name: string;
    position: string;
    description: string;
    linkedin: string;
    github?: string;
    year?: string;
    image: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    memberType: 'current' | 'past';
  };
}

if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error(
    "Missing required environment variables: NEXT_PUBLIC_CONTENTFUL_SPACE_ID or NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN"
  );
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching posts with:", {
      spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      hasAccessToken: !!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });

    const response = await client.getEntries<BlogPost>({
      content_type: "blogPost",
      order: ["-sys.createdAt"],
    });

    return response.items.map(item => ({
      ...item,
      contentTypeId: "blogPost",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const query = {
      content_type: "blogPost",
      "fields.slug[match]": slug,
      limit: 1,
    } as const;

    const response = await client.getEntries<BlogPost>(query);

    if (!response.items.length) return null;

    return {
      ...response.items[0],
      contentTypeId: "blogPost",
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function getAllMeetings(): Promise<Meeting[]> {
  try {
    const response = await client.getEntries<Meeting>({
      content_type: "meeting",
      order: ["-sys.createdAt"],
    });

    return response.items.map(item => ({
      ...item,
      contentTypeId: "meeting",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getUpcomingMeetings(): Promise<Meeting[]> {
  try {
    const response = await client.getEntries<Meeting>({
      content_type: "upcomingMeeting",
      order: ["-sys.createdAt"],
    });

    return response.items.map(item => ({
      ...item,
      contentTypeId: "upcomingMeeting",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getParallaxBanners(): Promise<ParallaxBanner[]> {
  try {
    const response = await client.getEntries<ParallaxBanner>({
      content_type: "parallaxBanner",
      order: ["-sys.createdAt"],
    });

    return response.items.map(item => ({
      ...item,
      contentTypeId: "parallaxBanner",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getCurrentEboardMembers(): Promise<EboardMember[]> {
  try {
    const response = await client.getEntries<EboardMember>({
      content_type: "eboardMember",
      'fields.memberType': 'current',
      order: ["sys.createdAt"],
    } as any);

    return response.items.map(item => ({
      ...item,
      contentTypeId: "eboardMember",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getPastEboardMembers(): Promise<EboardMember[]> {
  try {
    const response = await client.getEntries<EboardMember>({
      content_type: "eboardMember",
      'fields.memberType': 'past',
      order: ["sys.createdAt"],
    } as any);

    return response.items.map(item => ({
      ...item,
      contentTypeId: "eboardMember",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}
