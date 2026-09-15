// @lovable.dev/vite-tanstack-config already includes the required
// TanStack Start, React, Tailwind, Nitro, path aliases, etc.
// Do not manually add duplicate plugins.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  // On Vercel, use Nitro's Vercel preset instead of the default
  // Cloudflare Worker preset.
  nitro: isVercel ? { preset: "vercel" } : true,

  tanstackStart: {
    // Use our custom SSR server entry.
    server: {
      entry: "server",
    },
  },
});