import type { MetadataRoute } from 'next';
import { createServerClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const baseUrl = siteUrlFromEnv || vercelUrl || 'http://localhost:3000';

  const supabase = createServerClient();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/features',
    '/contact',
    '/store-locator-examples',
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug, updated_at')
    .not('slug', 'is', null);

  const blogRoutes: MetadataRoute.Sitemap = (posts || []).map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}


