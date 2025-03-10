// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@sidebase/nuxt-auth"],
  colorMode: {
    preference: "system",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  auth: {
    isEnabled: true,
    //disableServerSideAuth: false,
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  }

});