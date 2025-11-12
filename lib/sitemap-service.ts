import { supabase } from '@/lib/supabase/client';
import { sitemapGenerator } from './sitemap-generator';

export class SitemapService {
  async fetchStores() {
    // Since there's no stores table in the current schema, return empty array
    // This can be updated when stores functionality is added
    return [];
  }

  async fetchBlogPosts() {
    // First, let's try to get all posts to see what we have
    const { data: allPosts, error: allError } = await supabase
      .from('blog_posts')
      .select('id, slug, updated_at, published_at')
      .order('updated_at', { ascending: false });
    
    if (allError) {
      console.error('Error fetching all blog posts:', allError);
      return [];
    }
    
    // Filter for published posts (same logic as dashboard)
    const publishedPosts = allPosts?.filter(post => post.published_at !== null) || [];
    
    return publishedPosts.map(post => ({
      id: post.id,
      slug: post.slug ?? "",
      lastmod: new Date(post.updated_at).toISOString()
    }));
  }

  async generateCoreSitemap(): Promise<string> {
    return sitemapGenerator.generateCoreSitemap();
  }

  async generateStoresSitemap(): Promise<string> {
    const stores = await this.fetchStores();
    return sitemapGenerator.generateStoresSitemap(stores);
  }

  async generateBlogSitemap(): Promise<string> {
    const posts = await this.fetchBlogPosts();
    return sitemapGenerator.generateBlogSitemap(posts);
  }

  async generateMainSitemap(): Promise<string> {
    return sitemapGenerator.generateMainSitemap();
  }

  async generateMainSitemapPlain(): Promise<string> {
    return sitemapGenerator.generateMainSitemapPlain();
  }

  async generateAllSitemaps() {
    const [core, stores, blog, main] = await Promise.all([
      this.generateCoreSitemap(),
      this.generateStoresSitemap(),
      this.generateBlogSitemap(),
      this.generateMainSitemap()
    ]);

    return {
      core,
      stores,
      blog,
      main
    };
  }
}

export const sitemapService = new SitemapService();