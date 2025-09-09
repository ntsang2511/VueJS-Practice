export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  css: [
    "bootstrap",
    "animate.css",
    "~/../assets/css/custom.css",
  ],
  imports: {
    dirs: ['store']
  }
});
