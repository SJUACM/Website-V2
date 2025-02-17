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

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
});

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching posts...');
    const response = await client.getEntries<BlogPost>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });
    
    console.log('Response:', response);
    
    return response.items.map(item => ({
      ...item,
      contentTypeId: 'blogPost'
    }));
  } catch (error) {
    console.error('Contentful error:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  if (!response.items.length) return null;
  
  const item = response.items[0];
  return {
    ...item,
    contentTypeId: 'blogPost'
  };
} 