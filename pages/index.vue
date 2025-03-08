<script setup>
const { data: home_content } = await useAsyncData('home_content', () => queryCollection('content').path("/home").first());
</script> 

<template>
  <UContainer>
    Home
    <placeholder />
    <ContentRenderer :value="home_content" />
  </UContainer>
</template>