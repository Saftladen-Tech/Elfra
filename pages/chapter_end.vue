<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col grow justify-center items-center">
    <div class="flex flex-col justify-center items-center text-center space-y-12">
      <div>
        <h1 class="text-8xl font-semibold">Kapitel abgeschlossen!</h1>
      </div>
      <div data-testid="icon" class="dark:text-success-500 text-success-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-64">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div data-testid="navigation" class="flex space-x-24">
        <UButton variant="soft" icon="i-heroicons-arrow-left" class="flex justify-center items-center  p-4 w-56 text-center text-2xl">Wiederholen</UButton>
        <UButton variant="soft" trailing-icon="i-heroicons-arrow-right" class="flex justify-center items-center p-4 w-56 text-center text-2xl">Weiter</UButton>
      </div>
    </div>
  </div>
</template>