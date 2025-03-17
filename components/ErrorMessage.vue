<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="flex flex-col h-fit">
        <p class="text-prmry-500 text-9xl font-bold text-center">404</p>
        <p class="text-6xl">Page not found</p>
    </div>
</template>