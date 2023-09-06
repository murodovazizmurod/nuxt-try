// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sst: true,
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  css: ["@/assets/css/main.css"],
  router: {
    linkActiveClass: "active-route",
    linkExactActiveClass: "active-route-exact",
  }
});
