<template>
  <div class="lg:mx-auto max-w-screen-xl w-full px-4 mt-4 flex flex-col gap-4">
    <div class="grid grid-cols-[1fr,auto] items-center gap-4">
      <select class="p-2 bg-custom-secondary rounded-lg" name="category" id="category">
        <option value="cat001">Matemática</option>
        <option value="cat002">Algoritmos</option>
      </select>
      <button class="bg-custom-primary p-2 rounded-lg text-white min-w-24 text-center" @click="toggle">{{ isRunning ? 'Parar' : 'Iniciar' }}</button>
    </div>
    <div>
      <span class="p-8 bg-custom-secondary block text-center text-8xl rounded-2xl">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isRunning = ref(false);
let intervalId;

const start = () => {
  clearInterval(intervalId);
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;

  intervalId = setInterval(() => {
    seconds.value++;
    if (seconds.value === 60) {
      seconds.value = 0;
      minutes.value++;
      if (minutes.value === 60) {
        minutes.value = 0;
        hours.value++;
      }
    }
  }, 1000);
};

const stop = () => {
  clearInterval(intervalId);
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
};

const toggle = () => {
  isRunning.value = !isRunning.value;
  isRunning.value ? start() : stop();
};

const formattedTime = computed(() => {
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(hours.value)}       :        ${pad(minutes.value)}       :        ${pad(seconds.value)}`;
});
</script>