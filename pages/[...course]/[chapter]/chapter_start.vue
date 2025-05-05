<script setup lang="ts">
</script> 

<template>
  <div class="flex justify-center items-center grow">
      <div data-testid="contentwrapper" class="flex flex-col justify-center items-center max-w-[800px] space-y-8">
        <h1 class="text-8xl font-semibold dark:drop-shadow-glow-lg drop-shadow-glow-dark-lg">Topic xy</h1>
        <p class="text-4xl text-center bg-transparent">Hier kommt eine kurze beschreibung der Topic hin. Kann alles mögliche sein!</p>
        <UButton data-testid="startbtn" variant="ghost" size="xl" icon="i-heroicons-arrow-down"></UButton>
      </div>
  </div>
</template>