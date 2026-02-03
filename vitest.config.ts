import { defineVitestConfig } from "@nuxt/test-utils/config";
import { config } from "./customconfig/config.js";
import vue from "@vitejs/plugin-vue";

export default defineVitestConfig({
  plugins: [vue()],
  test: {
    globalSetup: ['./test/setup/globalSetup.ts'],
    environment: "happy-dom",
    provide: {
      customConfig: config,
      testURL: 'http://localhost:3000',
    },
  },
});
