<template>
  <div>
    <span class="p-8 bg-custom-secondary block text-center text-8xl rounded-2xl">{{ formattedTime }}</span>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  hours: Number,
  minutes: Number,
  seconds: Number
});

const formattedTime = computed(() => {
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(props.hours)}       :        ${pad(props.minutes)}       :        ${pad(props.seconds)}`;
});
</script>