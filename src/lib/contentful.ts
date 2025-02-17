import { createClient, EntrySkeletonType } from 'contentful';

export interface BlogPost extends EntrySkeletonType {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    content: any;
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
    slides?: string;
    recording?: string;
  };
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
});

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching posts with:', {
      spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      hasAccessToken: !!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    });
    
    const response = await client.getEntries<BlogPost>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });
    
    return response.items.map(item => ({
      ...item,
      contentTypeId: 'blogPost'
    }));
  } catch (error) {
    console.error('Contentful error:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries<BlogPost>({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (!response.items.length) return null;
    
    return {
      ...response.items[0],
      contentTypeId: 'blogPost'
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getAllMeetings(): Promise<Meeting[]> {
  try {
    const response = await client.getEntries<Meeting>({
      content_type: 'meeting',
      order: ['-sys.createdAt'],
    });
    
    return response.items.map(item => ({
      ...item,
      contentTypeId: 'meeting'
    }));
  } catch (error) {
    console.error('Contentful error:', error);
    return [];
  }
}