import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Rifky Alamsyah | Blog',
    description: 'Insights, thoughts and trends in design.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.{md,mdx}')),
    customData: `<language>en-us</language>`,
  });
}
