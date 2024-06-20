<template>
  <header class="relative">
    <nav class="shadow-md">
      <div class="h-24 grid grid-cols-2 lg:flex justify-between items-center lg:mx-auto max-w-screen-xl w-full px-4">
        <nuxt-link to="/">
          <StudyLogIcon />
        </nuxt-link>
        <button class="flex lg:hidden col-start-2 justify-end" @click="toggleMobileMenu">
          <MenuIcon />
        </button>
        <ul class="hidden lg:flex gap-4">
          <li class="p-2 text-custom-secondary-text">
            <nuxt-link to="/cronometro">cronômetro</nuxt-link>
          </li>
          <li class="bg-custom-primary p-2 rounded-lg text-white min-w-24 text-center">
            <nuxt-link to="/perfil">User</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav v-if="isOpen" class="mobile-menu absolute top-24 flex justify-end lg:mx-auto max-w-screen-xl w-full h-mobile-menu-height">
      <ul class="flex flex-col items-center lg:hidden gap-1 bg-custom-secondary w-[75vw] md:w-[50vw] p-4">
        <li class="p-4 text-custom-secondary-text">
          <nuxt-link to="/cronometro">cronômetro</nuxt-link>
        </li>
        <li class="bg-custom-primary p-4 rounded-lg text-white w-full text-center">
          <nuxt-link to="/perfil">User</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import StudyLogIcon from '@/components/icons/StudyLogIcon.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
}
</script>