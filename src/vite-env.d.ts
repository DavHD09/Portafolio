/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVICE_ID: string
    readonly VITE_TEMPLATE_ID: string
    readonly VITE_USER_ID: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }