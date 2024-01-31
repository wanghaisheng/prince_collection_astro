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
      tags: z.array(z.string()),
    //   categories: z.array(z.string())
    })
  });

  const guides = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
  });

  const reviews = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
  });

  const news = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
  });

  const authors = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string()
        }),
        tags: z.array(z.string())
      })
  });
  
  export const collections = {
    'blog': blog,
    'guides': guides,
    'reviews': reviews,
    'news': news,
    'authors': authors,
  };