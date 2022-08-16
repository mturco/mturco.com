/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
  interface Window {
    netlifyIdentity: any;
  }
}
