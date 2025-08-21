<script setup lang="ts">
import {config} from '@/customconfig/config';
</script>

<template>
  <footer data-testid="footer" class="flex justify-center items-center w-full text-xs text-gray-400 py-4">
    <p class="text-center space-x-1">
      <NuxtLink :to="`${config.institution.web}`" class="hover:underline">
        {{ config.institution.name }}
      </NuxtLink>
      using
      <NuxtLink to="https://github.com/Saftladen-Tech/Elfra" class="hover:underline">
        ELFRA Framework
      </NuxtLink>
      – MIT Licensed
    </p>
  </footer>
</template>