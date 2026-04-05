/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
  interface Window {
    netlifyIdentity: typeof import('netlify-identity-widget');
  }
}

declare namespace App {
  interface Error {
    stack?: string;
  }
}
