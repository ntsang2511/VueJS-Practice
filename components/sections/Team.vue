<template>
  <section class="wrapper bg-light">
    <div class="row grid-view gy-6 gy-xl-0">
      <div v-for="member in contentStore.team" :key="member.id" class="col-md-6 col-xl-3">
        <div class="card shadow-lg">
          <div class="card-body">
            <img class="rounded-circle w-15 mb-4" :src="member.image" :srcset="`${member.image}@2x.jpg 2x`" alt="" />
            <h4 class="mb-1">{{ member.name }}</h4>
            <div class="meta mb-2">{{ member.role }}</div>
            <p class="mb-2">{{ member.description }}</p>
            <nav class="nav social mb-0">
              <a v-for="social in member.socials" :key="social" :href="social"><Icon :name="social" /></a>
            </nav>
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
  contentStore.fetchTeam();
});
</script>