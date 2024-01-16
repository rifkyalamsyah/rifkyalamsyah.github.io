import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      heroImage: z.string().optional(),
    }),
});

export const collections = {
  project: projectCollection,
};
