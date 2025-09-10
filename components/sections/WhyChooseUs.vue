<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container pb-14 pb-md-16">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure><img class="img-auto" src="../../assets/images/illustrations/i22.png" alt="" /></figure>
        </div>
        <div class="col-lg-5">
          <h2 class="fs-15 text-uppercase text-primary mb-3">Why Choose Us?</h2>
          <h3 class="display-3 mb-7">We bring solutions to make life easier.</h3>
          <div class="accordion accordion-wrapper" id="accordionExample">
            <div v-for="(item, index) in contentStore.whyChooseUs" :key="index" class="card plain accordion-item">
              <div class="card-header" :id="'heading' + index">
                <button :class="{ 'accordion-button': true, 'collapsed': index !== 0 }" :data-bs-toggle="'collapse'" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0" :aria-controls="'collapse' + index">
                  {{ item.title }}
                </button>
              </div>
              <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
                <div class="card-body">
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="divider text-light mx-n2">
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
  contentStore.fetchWhyChooseUs();
});
</script>