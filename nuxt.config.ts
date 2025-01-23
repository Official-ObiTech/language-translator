// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: { path: "en-US.json", cache: false },
      },
      {
        code: "es",
        name: "Español",
        file: { path: "es-ES.json", cache: false },
      },
      {
        code: "fr",
        name: "Français",
        file: { path: "fr-FR.json", cache: false },
      },
    ],
    lazy: true,
    defaultLocale: "en",
    strategy: "prefix_and_default",
  },
});
