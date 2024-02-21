import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { type SupabaseClient, type User } from "@supabase/supabase-js";
import { type AstroCookies } from "astro";
import { type Database, type Tables } from "./definitions/supabase.ts";

//export const supabaseBrowserClient = createClient<Database>(import.meta.env.PUBLIC_NEXT_PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const supabaseBrowserClient = createBrowserClient<Database>(import.meta.env.PUBLIC_NEXT_PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_NEXT_PUBLIC_SUPABASE_ANON_KEY);

export function supabaseServerClient(cookies: AstroCookies) {
  return createServerClient<Database>(import.meta.env.PUBLIC_NEXT_PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(key) {
        return cookies.get(key)?.value;
      },
      set(key, value, options) {
        const cookie = { ...options };
        cookies.set(key, value, cookie);
      },
      remove(key, options) {
        cookies.delete(key, { ...options });
      },
    },
  });
}
