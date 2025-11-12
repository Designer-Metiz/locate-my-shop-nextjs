import type { Metadata } from "next";
import BlogDetailPage from "@/components/blog/BlogDetailPage";
import { createServerClient } from "@/lib/supabase/server";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const supabase = createServerClient();
  const slug = decodeURIComponent(params.slug);
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (!data) return { title: "Article | MSPL Store Locator" };
  const seoTitle = (data as any)?.seo_title ?? data.title;
  const seoDescription = (data as any)?.seo_description ?? data.excerpt ?? undefined;
  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: seoTitle,
      description: seoDescription,
      images: data.image_url ? [{ url: data.image_url as string }] : undefined,
    }
  };
}

export default async function BlogPostPage({ params }: Params) {
  const supabase = createServerClient();
  const slug = decodeURIComponent(params.slug);
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  const schema = (data as any)?.seo_schema;
  const schemaArray = Array.isArray(schema) ? schema : (schema ? [schema] : []);

  return (
    <>
      {schemaArray.map((obj: any, idx: number) => (
        <script
          key={idx}
          type="application/ld+json"
          // Rendered on the server so it's visible in page source
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
      <BlogDetailPage slug={slug} />
    </>
  );
}


