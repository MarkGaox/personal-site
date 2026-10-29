import rss from '@astrojs/rss';
import { site } from '../site';
import { getPosts, url } from '../lib';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: new URL(import.meta.env.BASE_URL, context.site).href,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: url(`/blog/${p.id}/`),
    })),
  });
}
