<template>
  <p class="text-center mb-8">Trusted by over 2K+ clients across the world</p>
  <div class="row row-cols-4 row-cols-md-4 row-cols-lg-7 row-cols-xl-7 gy-10 mb-2 d-flex align-items-center justify-content-center">
    <div v-for="n in 7" :key="n" class="col">
      <img class="img-fluid px-md-3 px-lg-0 px-xl-2 px-xxl-5" :src="`/brands/c${n}.png`" alt="" />
    </div>
  </div>
</template>