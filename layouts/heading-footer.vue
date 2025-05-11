<script setup lang="ts">
import {config} from '@/config';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div data-testid="header" class="flex items-center justify-center space-x-5 mt-20">
      <img src="public/images/logo.jpg" alt="Company Logo" class="w-24 h-24 rounded-full" />
      <h1 class="text-6xl font-bold">{{config.institution.name}}</h1>
    </div>
    <slot />
    <footer-costum />
  </div>
</template>