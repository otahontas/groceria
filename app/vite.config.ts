import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  server: {
    proxy: {
      "/graphql": {
        changeOrigin: true,
        target: "http://localhost:8000/",
      },
    },
  },
  plugins: [reactRefresh()],
});
