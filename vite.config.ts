import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        solid({ ssr: true }),
        Pages({
            dirs: "src/pages",
        }),
        AutoImport({
            imports: ["solid-js", "solid-app-router"],
        }),
    ],
});
