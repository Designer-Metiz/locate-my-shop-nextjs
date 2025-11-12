export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: { PostgrestVersion: "13.0.4" }
  public: {
    Tables: {
      blog_analytics: {
        Row: { created_at: string; event_type: string; id: string; ip_address: unknown | null; post_id: string; user_agent: string | null; user_id: string | null }
        Insert: { created_at?: string; event_type: string; id?: string; ip_address?: unknown | null; post_id: string; user_agent?: string | null; user_id?: string | null }
        Update: { created_at?: string; event_type?: string; id?: string; ip_address?: unknown | null; post_id?: string; user_agent?: string | null; user_id?: string | null }
        Relationships: [ { foreignKeyName: "fk_analytics_post"; columns: ["post_id"]; isOneToOne: false; referencedRelation: "blog_posts"; referencedColumns: ["id"] } ]
      }
      blog_authors: {
        Row: { avatar_url: string | null; bio: string | null; created_at: string; facebook_url: string | null; id: string; linkedin_url: string | null; name: string; twitter_url: string | null; updated_at: string }
        Insert: { avatar_url?: string | null; bio?: string | null; created_at?: string; facebook_url?: string | null; id?: string; linkedin_url?: string | null; name: string; twitter_url?: string | null; updated_at?: string }
        Update: { avatar_url?: string | null; bio?: string | null; created_at?: string; facebook_url?: string | null; id?: string; linkedin_url?: string | null; name?: string; twitter_url?: string | null; updated_at?: string }
        Relationships: []
      }
      blog_comments: {
        Row: { author_email: string; author_name: string; content: string; created_at: string; id: string; post_id: string; status: string | null; updated_at: string; user_id: string | null }
        Insert: { author_email: string; author_name: string; content: string; created_at?: string; id?: string; post_id: string; status?: string | null; updated_at?: string; user_id?: string | null }
        Update: { author_email?: string; author_name?: string; content?: string; created_at?: string; id?: string; post_id?: string; status?: string | null; updated_at?: string; user_id?: string | null }
        Relationships: [ { foreignKeyName: "fk_comments_post"; columns: ["post_id"]; isOneToOne: false; referencedRelation: "blog_posts"; referencedColumns: ["id"] } ]
      }
      blog_posts: {
        Row: { author_id: string | null; category: string | null; content: string | null; created_at: string; date_day: string | null; date_month: string | null; date_year: string | null; excerpt: string | null; id: string; image_url: string | null; published_at: string | null; read_time: string | null; slug: string | null; title: string; updated_at: string; user_id: string | null }
        Insert: { author_id?: string | null; category?: string | null; content?: string | null; created_at?: string; date_day?: string | null; date_month?: string | null; date_year?: string | null; excerpt?: string | null; id?: string; image_url?: string | null; published_at?: string | null; read_time?: string | null; slug?: string | null; title: string; updated_at?: string; user_id?: string | null }
        Update: { author_id?: string | null; category?: string | null; content?: string | null; created_at?: string; date_day?: string | null; date_month?: string | null; date_year?: string | null; excerpt?: string | null; id?: string; image_url?: string | null; published_at?: string | null; read_time?: string | null; slug?: string | null; title?: string; updated_at?: string; user_id?: string | null }
        Relationships: [ { foreignKeyName: "blog_posts_author_id_fkey"; columns: ["author_id"]; isOneToOne: false; referencedRelation: "blog_authors"; referencedColumns: ["id"] } ]
      }
      blog_settings: {
        Row: { analytics_settings: Json | null; comment_settings: Json | null; contact_email: string | null; created_at: string; email_settings: Json | null; id: string; seo_settings: Json | null; site_description: string | null; site_name: string; site_url: string | null; social_links: Json | null; updated_at: string; user_id: string }
        Insert: { analytics_settings?: Json | null; comment_settings?: Json | null; contact_email?: string | null; created_at?: string; email_settings?: Json | null; id?: string; seo_settings?: Json | null; site_description?: string | null; site_name?: string; site_url?: string | null; social_links?: Json | null; updated_at?: string; user_id: string }
        Update: { analytics_settings?: Json | null; comment_settings?: Json | null; contact_email?: string | null; created_at?: string; email_settings?: Json | null; id?: string; seo_settings?: Json | null; site_description?: string | null; site_name?: string; site_url?: string | null; social_links?: Json | null; updated_at?: string; user_id?: string }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: { created_at: string; email: string; id: string; status: string | null }
        Insert: { created_at?: string; email: string; id?: string; status?: string | null }
        Update: { created_at?: string; email?: string; id?: string; status?: string | null }
        Relationships: []
      }
      profiles: {
        Row: { avatar_url: string | null; bio: string | null; created_at: string; display_name: string | null; id: string; role: string | null; updated_at: string; user_id: string }
        Insert: { avatar_url?: string | null; bio?: string | null; created_at?: string; display_name?: string | null; id?: string; role?: string | null; updated_at?: string; user_id: string }
        Update: { avatar_url?: string | null; bio?: string | null; created_at?: string; display_name?: string | null; id?: string; role?: string | null; updated_at?: string; user_id?: string }
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]) | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends { Row: infer R }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends { Row: infer R }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends { Insert: infer I }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Insert: infer I }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends { Update: infer U }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Update: infer U }
      ? U
      : never
    : never;

export const Constants = { public: { Enums: {} } } as const;


