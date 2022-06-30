import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import path from "path";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      /* options */
    }),
    AutoImport({
      /* options */
    }),
    Pages({
      pagesDir: [{ dir: "src/pages", baseRoute: "" }],
      extensions: ["vue", "md"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: "/config.js", dest: "dist/" }],
        }),
      ],
    },
  },
  assetsInclude: ["config.js"],
});
