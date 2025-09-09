<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-lg-8 pb-14 pb-md-16">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
        <div class="col-lg-4 text-center text-lg-start">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Company Facts</h2>
          <h3 class="display-3 mb-4 pe-xxl-5">We are proud of our design team</h3>
          <p class="mb-0 pe-xxl-11">Just sit back and relax while we take care of your business needs for you.</p>
        </div>
        <div class="col-lg-8 mt-lg-2">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="fact in contentStore.facts" :key="fact.id" class="col-md-4">
              <div class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4">
                <Icon :name="fact.icon" />
              </div>
              <h3 class="counter">{{ fact.value }}</h3>
              <p>{{ fact.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '../common/Icon.vue';
import { useContentStore } from '../../stores/content';
const contentStore = useContentStore();
onMounted(() => {
  contentStore.fetchFacts();
});
</script>