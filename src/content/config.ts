import { z, defineCollection } from 'astro:content';

// project
const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      desc: z.string(),
      pubDate: z.date(),
      category: z.string(),
      services: z.string(),
      year: z.string(),
      image: image(),
    }),
});

// blog
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      desc: z.string(),
      pubDate: z.date(),
      modDate: z.date(),
      category: z.string(),
      image: image(),
      imageUrl: z.string(),
      author: z.string().default('Anonymous'),
      readingTime: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  project: projectCollection,
  blog: blogCollection,
};
