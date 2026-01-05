export function getSiteBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const fromVercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const raw = fromEnv || fromVercel || 'http://localhost:3000';
  return raw.replace(/\/+$/, '');
}


