import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goit-typescript-hw-02/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
