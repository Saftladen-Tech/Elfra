<script setup lang="ts">
import ChangeColorBtn from '~/components/ChangeColorBtn.vue';
const links = ref([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'About',
    icon: 'i-heroicons-information-circle',
    to: '/chapter_content',
  },
]);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex px-20 h-32 items-center justify-center">
      <img src="public/images/logo.jpg" alt="Company Logo" class="w-24 h-24 rounded-full" />
      <UHorizontalNavigation :links="links" :ui="{icon: {base:'bg-gray-200 group-hover:dark:bg-prmry-500'}, before:'hover:before:bg-prmry-300/30'}" class="border-b border-gray-200 dark:border-gray-400 ml-24" />
      <div class="flex justify-center item-center mx-10">
        <ChangeColorBtn />
      </div>
      <UAvatar alt="avatar" size="2xl" />
    </header>
    <slot />
    <footer-costum />
  </div>
</template>