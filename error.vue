<script setup lang="ts">
import type { NuxtError } from '#app'
import { UButton } from '#components';

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="flex flex-col w-full h-screen justify-center items-center">
    <div class="flex flex-grow justify-center items-center">
      <div data-testid="contentwrapper" class="flex flex-col">
        <p class="text-prmry-500 text-9xl font-bold text-center">{{ error.statusCode }}</p>
        <p class="text-6xl">{{ error.statusMessage }}</p>
      </div>
      <UButton color="primary" variant="outline" class="px-14 py-4" to="/">Home</UButton>
    </div>
    <footer-costum />
  </div>
</template>