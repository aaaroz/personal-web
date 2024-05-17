/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SPOTIFY_CLIENT_SECRET: String;
  readonly SPOTIFY_CLIENT_ID: String;
  readonly SPOTIFY_REFRESH_TOKEN: String;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
