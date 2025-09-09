<template>
  <button :class="['btn', btnClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  btnClass: { type: String, default: 'btn-primary' },
});
defineEmits(['click']);
</script>