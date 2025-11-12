import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  date_day: string;
  date_month: string;
  date_year: string;
  read_time: string;
  slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  user_id: string | null;
  author_id: string | null;
  seo_title?: string;
  seo_description?: string;
  seo_schema?: any; // jsonb payload for JSON-LD
  author?: {
    id: string;
    name: string;
    bio: string;
    avatar_url: string;
    twitter_url?: string;
    linkedin_url?: string;
    facebook_url?: string;
  };
  views?: number;
  comments?: number;
  likes?: number;
}

const normalizePost = (p: any): BlogPost => ({
  id: p.id,
  title: p.title ?? "",
  excerpt: p.excerpt ?? "",
  content: p.content ?? "",
  image_url: p.image_url ?? "",
  category: p.category ?? "",
  date_day: p.date_day ?? "",
  date_month: p.date_month ?? "",
  date_year: p.date_year ?? "",
  read_time: p.read_time ?? "",
  slug: p.slug ?? "",
  published_at: p.published_at ?? "",
  created_at: p.created_at ?? "",
  updated_at: p.updated_at ?? "",
  user_id: p.user_id ?? null,
  author_id: p.author_id ?? null,
  seo_title: p.seo_title ?? undefined,
  seo_description: p.seo_description ?? undefined,
  seo_schema: p.seo_schema ?? undefined,
  author: p.author ?? undefined,
  views: p.views ?? undefined,
  comments: p.comments ?? undefined,
  likes: p.likes ?? undefined,
});

export interface BlogAuthor {
  id: string;
  name: string;
  bio: string;
  avatar_url: string;
  twitter_url?: string;
  linkedin_url?: string;
  facebook_url?: string;
  created_at: string;
  updated_at: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          author:blog_authors!author_id(*)
        `)
        .order('published_at', { ascending: false });

      if (error) throw error;

      setPosts((data || []).map(normalizePost));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, refetch: fetchPosts };
};

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      let decodedSlug = slug;
      try { decodedSlug = decodeURIComponent(slug); } catch {}
      
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select(`
            *,
            author:blog_authors!author_id(*)
          `)
          .eq('slug', decodedSlug)
          .maybeSingle();

        if (error) throw error;

        setPost(data ? normalizePost(data) : null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};

export const useBlogAuthors = () => {
  const [authors, setAuthors] = useState<BlogAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAuthors = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_authors')
        .select('*')
        .order('name');
      if (error) throw error;
      setAuthors(
        (data || []).map((a: any) => ({
          id: a.id,
          name: a.name ?? "",
          bio: a.bio ?? "",
          avatar_url: a.avatar_url ?? "",
          twitter_url: a.twitter_url ?? undefined,
          linkedin_url: a.linkedin_url ?? undefined,
          facebook_url: a.facebook_url ?? undefined,
          created_at: a.created_at ?? "",
          updated_at: a.updated_at ?? "",
        }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return { authors, loading, error, refetch: fetchAuthors };
};