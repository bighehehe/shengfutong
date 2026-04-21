import { defineCollection, z } from 'astro:content';

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    tags: z.array(z.string()),
    pubDate: z.date(),
  }),
});

export const collections = { resources };
