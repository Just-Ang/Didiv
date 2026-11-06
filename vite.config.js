import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets"
    },
  },

  base: mode === "github" ? "/Didiv/" : "/",
    // base: '/Didiv/',
      // base: '/',
}));

