/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_COMPANY: string;
    readonly PUBLIC_NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    readonly PUBLIC_NEXT_PUBLIC_SUPABASE_URL: string;
    readonly PRIVATE_SUPABASE_SERVICE_ROLE_KEY: string;
    readonly PUBLIC_DEBUG: boolean;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  