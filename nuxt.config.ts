// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from "./config.js";

let authprovider = "";

if (config.auth?.enabled) {
  authprovider = "@nuxtjs/supabase";
}

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts", authprovider],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: [],
      saveRedirectToCookie: true,
    },
  },
  colorMode: {
    preference: "system",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [{ name: config.font, provider: config.fontprovider }],
  },
});
