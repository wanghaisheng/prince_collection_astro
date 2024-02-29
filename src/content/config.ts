// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      imageAlt: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      // carousel: z.array(z.string()),
      carousel: z.array(
        z.object(
        {
          imageUrl: z.string(),
          imageAlt: z.string(),
        }
      )),
      gallery: z.array(z.string())
      })
  });

  const news = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      imageAlt: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      carousel: z.array(z.string()),
      gallery: z.array(z.string())
    })
  });

  const reviews = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      imageAlt: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      carousel: z.array(z.string()),
      gallery: z.array(z.string())
    })
  });

  const guides = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      imageAlt: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      carousel: z.array(z.string()),
      gallery: z.array(z.string())
    })
  });

  const authors = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        imageUrl: z.string(),
        imageAlt: z.string(),
        tags: z.array(z.string())
      })
  });
  
  // make all fiels optional for no errors if fields are undefined or null
  // https://github.com/colinhacks/zod?tab=readme-ov-file#nonempty
  const content = z.optional(blog, news, reviews, guides, authors);

  export const collections = {
    'blog': content.blog,
    'guides': content.guides,
    'reviews': content.reviews,
    'news': content.news,
    'authors': content.authors,
  };