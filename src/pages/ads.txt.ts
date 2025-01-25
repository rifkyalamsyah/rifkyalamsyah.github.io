import type { APIRoute } from 'astro';
const ads = 'google.com, pub-6433615438084245, DIRECT, f08c47fec0942fa0';

export const GET: APIRoute = () => {
  return new Response(ads, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
