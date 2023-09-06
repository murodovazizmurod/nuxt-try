// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  css: ["@/assets/css/main.css"],
  router: {
    linkActiveClass: "active-route",
    linkExactActiveClass: "active-route-exact",
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
