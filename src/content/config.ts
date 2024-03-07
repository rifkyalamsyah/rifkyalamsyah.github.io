import { z, defineCollection } from 'astro:content';

// project
const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
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
      imageUrl: z.string(),
      author: z.string().default('Anonymous'),
      pubDate: z.date(),
      readingTime: z.string(),
    }),
});

export const collections = {
  project: projectCollection,
  blog: blogCollection,
};
