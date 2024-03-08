import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: any; }) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Rifky Alamsyah | Blog',
    description: 'Insights, thoughts and trends in design.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.desc,
      pubDate: post.data.pubDate,
      link: `blog/${post.slug}/`,
    })),
  });
}
