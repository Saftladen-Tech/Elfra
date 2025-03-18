<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="flex w-full min-h-screen justify-center items-center">
    <div class="flex flex-col h-fit">
        <p class="text-prmry-500 text-9xl font-bold text-center">{{ error.statusCode }}</p>
        <p class="text-6xl">{{ error.statusMessage }}</p>
    </div>
  </div>
</template>