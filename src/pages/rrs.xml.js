import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Rifky Alamsyah | Blog',
    description: 'Insights, thoughts and trends in design.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      category: post.data.category,
      link: `blog/${slug}/`,
    })),
  });
}
