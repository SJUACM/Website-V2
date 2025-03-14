import {
  createClient,
  EntrySkeletonType,
  ContentfulClientApi,
} from "contentful";
import { Document } from "@contentful/rich-text-types";
import { env } from "@/config/env";

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
    resourcesUrl?: string;
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

export interface LandingPageGraphic extends EntrySkeletonType {
  sys: {
    id: string;
  };
  contentTypeId: string;
  fields: {
    title: string;
    description?: string;
    // The image can be in either of these fields
    image?: {
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
    // Some entries use 'graphic' instead of 'image'
    graphic?: {
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

// Create a more resilient client initialization
let client: ContentfulClientApi<undefined>;

try {
  // Check if environment variables are available
  if (!env.CONTENTFUL_SPACE_ID || !env.CONTENTFUL_ACCESS_TOKEN) {
    console.warn(
      "Warning: Missing Contentful environment variables. Using fallback data where available."
    );
  }

  // Create the client with explicit values (not relying on fallbacks)
  const spaceId = env.CONTENTFUL_SPACE_ID;
  const accessToken = env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    console.warn(
      "Warning: Missing Contentful environment variables. Using fallback data where available."
    );
    throw new Error("Contentful credentials are missing");
  }

  client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  console.log("Contentful client initialized successfully");
} catch (error) {
  console.error("Error initializing Contentful client:", error);
  // Create a dummy client that returns empty data
  client = {
    getEntries: async () => ({ items: [] }),
  } as unknown as ContentfulClientApi<undefined>;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching posts with:", {
      spaceId: env.CONTENTFUL_SPACE_ID,
      hasAccessToken: !!env.CONTENTFUL_ACCESS_TOKEN,
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

export async function getLandingPageGraphicByTitle(
  title: string
): Promise<LandingPageGraphic | null> {
  try {
    console.log(`Fetching landing page graphic with title: "${title}"`);

    // Verify client and credentials before making the request
    if (!env.CONTENTFUL_SPACE_ID || !env.CONTENTFUL_ACCESS_TOKEN) {
      console.error(
        "Contentful credentials missing when fetching graphic:",
        title
      );
      return null;
    }

    const response = await client.getEntries<LandingPageGraphic>({
      content_type: "landingPageGraphics",
      "fields.title": title,
      limit: 1,
    } as any); // Type assertion needed due to Contentful types limitation

    console.log(`Found ${response.items.length} items for "${title}"`);

    if (!response.items.length) {
      console.log(`No graphic found with title "${title}", returning null`);
      return null;
    }

    const item = response.items[0] as unknown as LandingPageGraphic;

    // Check if the image is under 'graphic' field instead of 'image'
    const hasGraphicField = !!item.fields?.graphic;
    const hasImageField = !!item.fields?.image;
    let imageUrl = null;

    // Check image field first
    if (hasImageField && item.fields.image?.fields?.file?.url) {
      imageUrl = item.fields.image.fields.file.url;
      console.log(`Found ${title} URL in image field:`, imageUrl);
    }
    // Then check graphic field
    else if (hasGraphicField && item.fields.graphic?.fields?.file?.url) {
      imageUrl = item.fields.graphic.fields.file.url;
      console.log(`Found ${title} URL in graphic field:`, imageUrl);
    }

    // Create a modified item with the image field properly set if it's under 'graphic'
    const modifiedItem = {
      ...item,
      fields: {
        ...item.fields,
        image:
          item.fields.image ||
          (hasGraphicField ? item.fields.graphic : undefined),
      },
      contentTypeId: "landingPageGraphics",
    };

    return modifiedItem;
  } catch (error) {
    console.error(`Error fetching landing page graphic "${title}":`, error);
    return null;
  }
}

export async function getAllLandingPageGraphics(): Promise<
  LandingPageGraphic[]
> {
  try {
    const response = await client.getEntries<LandingPageGraphic>({
      content_type: "landingPageGraphics",
      order: ["sys.createdAt"],
    });

    return response.items.map(item => ({
      ...item,
      contentTypeId: "landingPageGraphics",
    }));
  } catch (error) {
    console.error("Error fetching landing page graphics:", error);
    return [];
  }
}
