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
    link?: string;
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
    memberType: "current" | "past";
  };
}

export interface Hackathon extends EntrySkeletonType {
  sys: {
    id: string;
  };
  contentTypeId: string;
  fields: {
    title: string;
    slug?: string;
    description: string;
    startDate?: string; // ISO date string
    endDate?: string; // ISO date string
    status?: "ongoing" | "upcoming" | "past";
    registrationLink?: string;
    details?: Document; // Rich text for detailed content
    image: {
      fields: {
        file: {
          url: string;
          details?: {
            image?: {
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
      order: ["-fields.date"] as any,
    });

    const sortedMeetings = response.items.sort((a, b) => {
      const dateA = new Date(a.fields.date).getTime();
      const dateB = new Date(b.fields.date).getTime();
      return dateB - dateA;
    });

    return sortedMeetings.map(item => ({
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
      "fields.memberType": "current",
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
      "fields.memberType": "past",
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

export async function addParallaxBanner(
  title: string,
  imageUrl: string,
  link?: string
): Promise<ParallaxBanner | null> {
  try {
    // This function requires management token with write access
    // You would need to implement this with the Contentful Management API
    // For now, this is just a placeholder to show how it could be done
    console.log(
      "To add a new parallax banner, use the Contentful web interface or implement the Management API"
    );
    console.log("Title:", title);
    console.log("Image URL:", imageUrl);
    console.log("Link:", link);

    return null;
  } catch (error) {
    console.error("Error adding parallax banner:", error);
    return null;
  }
}

export async function getAllHackathons(): Promise<Hackathon[]> {
  try {
    console.log("Fetching all hackathons");

    const response = await client.getEntries<Hackathon>({
      content_type: "hackathon",
      order: ["-fields.startDate"] as any,
    });

    console.log(`Found ${response.items.length} hackathons`);

    if (response.items.length > 0) {
      console.log(
        "Hackathon slugs:",
        response.items.map(item => item.fields.slug)
      );
    }

    return response.items.map(item => ({
      ...item,
      contentTypeId: "hackathon",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getHackathonsByStatus(
  status: "ongoing" | "upcoming" | "past"
): Promise<Hackathon[]> {
  try {
    // Since the status field might not exist, get all hackathons and filter manually
    const response = await client.getEntries<Hackathon>({
      content_type: "hackathon",
      // Don't filter by status since it might not exist
      limit: 100,
    } as any);

    // Filter manually based on status
    const filteredItems = response.items.filter(item => {
      // If status field doesn't exist, treat as 'upcoming' by default
      const itemStatus = item.fields.status || "upcoming";
      return itemStatus === status;
    });

    return filteredItems.map(item => ({
      ...item,
      contentTypeId: "hackathon",
    }));
  } catch (error) {
    console.error("Contentful error:", error);
    return [];
  }
}

export async function getHackathonBySlug(
  slug: string
): Promise<Hackathon | null> {
  try {
    console.log(`Fetching hackathon with slug: ${slug}`);

    // Temporarily use a different approach - get all hackathons and find by ID
    const response = await client.getEntries<Hackathon>({
      content_type: "hackathon",
      // Don't filter by slug since it doesn't exist
      limit: 100,
    } as any);

    console.log(`Found ${response.items.length} hackathons total`);

    // For debugging, log all available fields
    if (response.items.length > 0) {
      console.log("Available fields:", Object.keys(response.items[0].fields));
    }

    // Try to find the hackathon by ID instead of slug
    const hackathon = response.items.find(item => item.sys.id === slug);

    if (!hackathon) return null;

    return {
      ...hackathon,
      contentTypeId: "hackathon",
    };
  } catch (error) {
    console.error("Error fetching hackathon:", error);
    return null;
  }
}
