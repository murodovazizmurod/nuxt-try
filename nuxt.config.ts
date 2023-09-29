// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,

    timeline: {
      enabled: false
    }
  },
  modules: ["@nuxt/content", "nuxt-og-image"],
  css: ["@/assets/css/main.css"],
  router: {
    linkActiveClass: "active-route",
    linkExactActiveClass: "active-route-exact",
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  site: {
    url: 'https://5611-94-158-61-228.ngrok-free.app/',
  },


  
  runtimeConfig: {
    public: {
      siteUrl: 'https://5611-94-158-61-228.ngrok-free.app/'
    }
  }
});