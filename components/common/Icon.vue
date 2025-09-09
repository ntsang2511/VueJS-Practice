<template>
  <svg :class="iconClass" :width="size" :height="size">
    <use :xlink:href="`/icons.svg#${name}`" />
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: String, default: '24' },
  iconClass: { type: String, default: '' },
});
</script>