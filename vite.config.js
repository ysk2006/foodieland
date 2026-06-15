import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { robots, sitemap } from "./scripts/generate-seo-files.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

function generateSeoFilesPlugin() {
  return {
    name: "generate-seo-files",
    buildStart() {
      const publicDir = resolve(process.cwd(), "public");
      writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap);
      writeFileSync(resolve(publicDir, "robots.txt"), robots);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generateSeoFilesPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
