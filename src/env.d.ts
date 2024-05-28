/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SPOTIFY_CLIENT_SECRET: string;
  readonly SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_REFRESH_TOKEN: string;
  readonly RESEND_API_KEY: string;
  readonly PUBLIC_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
