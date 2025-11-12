import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const baseUrl = siteUrlFromEnv || vercelUrl || 'http://localhost:3000';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
}


