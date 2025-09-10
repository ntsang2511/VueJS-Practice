<template>
  <div class="content-wrapper">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/sections/Header.vue';
import Footer from '../components/sections/Footer.vue';

useHead({
  title: 'Digital Agency',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Award-winning digital agency specializing in mobile design, web design, and 3D animation.' },
    { name: 'keywords', content: 'digital agency, mobile design, web design, 3D animation' },
    { name: 'author', content: 'Your Name' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
});
</script>

<style scoped>
.content-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>