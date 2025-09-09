<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
      <div class="row text-center">
        <div class="col-lg-8 offset-lg-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Happy Customers</h2>
          <h3 class="display-3 mb-10 px-xxl-10">Don't take our word for it. See what customers are saying about us.</h3>
        </div>
      </div>
      <div class="grid">
        <div class="row isotope gy-6">
          <div v-for="testimonial in contentStore.testimonials" :key="testimonial.id" class="item col-md-6 col-xl-4">
            <div class="card shadow-lg">
              <div class="card-body">
                <span class="ratings five mb-2"></span>
                <blockquote class="border-0 mb-0">
                  <p>{{ testimonial.text }}</p>
                  <div class="blockquote-details">
                    <img class="rounded-circle w-12" :src="testimonial.avatar" :srcset="`${testimonial.avatar}@2x.jpg 2x`" alt="" />
                    <div class="info">
                      <h5 class="mb-1">{{ testimonial.name }}</h5>
                      <p class="mb-0">{{ testimonial.role }}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContentStore } from '../../stores/content';
const contentStore = useContentStore();
onMounted(() => {
  contentStore.fetchTestimonials();
});
</script>