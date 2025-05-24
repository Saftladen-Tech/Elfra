// https://nuxt.com/docs/api/configuration/nuxt-config
import {config} from "./config.js";
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts"],
  colorMode: {
    preference: "system",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [
      {name: config.font, provider: config.fontprovider }
    ]
  },
});