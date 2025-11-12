"use client";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;
console.log("SUPABASE_URL", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY", SUPABASE_ANON_KEY);

// Helpful console diagnostics in dev
if (typeof window !== "undefined") {
  // Only log on client to verify that env was inlined
  // Do not log full keys
  // eslint-disable-next-line no-console
  console.log("[Supabase ENV]", {
    urlPresent: Boolean(SUPABASE_URL),
    anonKeyPresent: Boolean(SUPABASE_ANON_KEY),
  });
}

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // This throws early and clearly if .env.local isn't configured or dev server wasn't restarted
  throw new Error(
    "Supabase env missing. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local and restart `npm run dev`."
  );
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
});


