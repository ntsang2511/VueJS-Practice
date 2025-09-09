<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-lg-7 pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Latest Projects</h2>
          <h3 class="display-3 mb-10">Check out some of our awesome projects with creative ideas and great design.</h3>
        </div>
      </div>
      <div class="swiper-container grid-view nav-bottom nav-color mb-14" data-margin="30" data-dots="false" data-nav="true" data-items-md="2" data-items-xs="1">
        <div class="swiper overflow-visible">
          <div class="swiper-wrapper">
            <div v-for="project in contentStore.projects" :key="project.id" class="swiper-slide">
              <figure class="rounded mb-7">
                <NuxtLink :to="project.link"><img :src="project.image" :srcset="`${project.image}@2x.jpg 2x`" alt="" /></NuxtLink>
              </figure>
              <div class="project-details d-flex justify-content-center flex-column">
                <div class="post-header">
                  <h2 class="post-title h3"><NuxtLink :to="project.link" class="link-dark">{{ project.title }}</NuxtLink></h2>
                  <div class="post-category text-ash">{{ project.category }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="divider text-soft-primary mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContentStore } from '../../stores/content';
const contentStore = useContentStore();
onMounted(() => {
  contentStore.fetchProjects();
});
</script>