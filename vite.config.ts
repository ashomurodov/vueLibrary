import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    testTimeout: 2000,
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      enabled: true,
      exclude: ["**/src/stores/**", "**/src/views/**"],
    },
    reporters: ["html"],
  },
});
