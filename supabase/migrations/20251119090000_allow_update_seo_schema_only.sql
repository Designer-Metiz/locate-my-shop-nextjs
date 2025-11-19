-- Allow authenticated users to update ONLY the seo_schema field on any blog post
-- NOTE: In RLS policies you cannot reference NEW/OLD. Use column-level privileges
-- to restrict which columns a role can update, and create a permissive UPDATE
-- policy to let RLS allow the row update while the GRANT limits columns.

-- Ensure RLS is enabled (no-op if already enabled)
alter table if exists public.blog_posts enable row level security;

-- Grant column-level UPDATE privilege on seo_schema to authenticated users
grant update (seo_schema) on table public.blog_posts to authenticated;

-- Create a permissive UPDATE policy for authenticated role.
-- Column-level grant above ensures only seo_schema can actually be updated.
do $$
begin
  if not exists (
    select 1 from pg_policies 
    where schemaname = 'public' and tablename = 'blog_posts' and policyname = 'auth_can_update_seo_schema'
  ) then
    create policy auth_can_update_seo_schema
    on public.blog_posts
    for update
    to authenticated
    using (true)
    with check (true);
  end if;
end$$;


