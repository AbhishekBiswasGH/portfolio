import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    exclude: ["test/e2e/**"],
    include: [
      "test/components/**/*.test.tsx",
      "test/components/**/*.test.ts"
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@components": path.resolve(__dirname, "./components")
    }
  }
});
