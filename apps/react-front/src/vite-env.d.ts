/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVELOP_SERVER: string;
  readonly VITE_ENVIROMENT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
