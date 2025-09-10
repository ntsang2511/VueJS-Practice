export default defineNuxtConfig({
  compatibilityDate: "2025-09-09",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/supabase",
  ],
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    redirect: false,
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "animate.css/animate.min.css", "~/../assets/css/custom.css"],
  imports: {
    dirs: ["stores"],
  },
});
