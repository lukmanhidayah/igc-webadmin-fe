/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_MODE: "dev" | "prod";
  readonly VITE_BASE_URL: string
  readonly VITE_FIREBASE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
