import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import eslint from "vite-plugin-eslint";
import path from "path";

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
    // eslint(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
