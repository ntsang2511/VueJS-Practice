<template>
  <div>
    <Hero />
    <Services />
    <Strategy />
    <WhyChooseUs />
    <Facts />
    <Team />
    <Projects />
    <Testimonials />
    <FAQ />
  </div>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue';
import Services from '../components/sections/Services.vue';
import Strategy from '../components/sections/Strategy.vue';
import WhyChooseUs from '../components/sections/WhyChooseUs.vue';
import Facts from '../components/sections/Facts.vue';
import Team from '../components/sections/Team.vue';
import Projects from '../components/sections/Projects.vue';
import Testimonials from '../components/sections/Testimonials.vue';
import FAQ from '../components/sections/FAQ.vue';

useHead({
  title: 'Home - Digital Agency',
  meta: [
    { name: 'description', content: 'Award-winning digital agency specializing in mobile design, web design, and 3D animation.' },
  ],
});
</script>