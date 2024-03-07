import { z, defineCollection } from 'astro:content';

// project
const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

// blog
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      image: image(),
      imageUrl: z.string().optional(),
      author: z.string().default('Anonymous'),
      pubDate: z.date(),
      readingTime: z.string(),
    }),
});

export const collections = {
  project: projectCollection,
  blog: blogCollection,
};
