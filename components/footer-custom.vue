<script setup lang="ts">
import {config} from '@/customconfig/config';

let institutionpage = config.institution.web;

if (!(config.institution.web.startsWith("https://"))) {
  institutionpage = `https://${config.institution.web}`
}

</script>

<template>
  <footer data-testid="footer" class="flex justify-center items-center w-full text-xs text-gray-400 py-4">
    <p class="text-center space-x-1">
      <NuxtLink :to="`${institutionpage}`" class="hover:underline">
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