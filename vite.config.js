import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: false, // mantém uso com { ReactComponent as ... }
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
        icon: true,
      },
      include: "**/*.svg",
    }),
    react(),
  ],
});
