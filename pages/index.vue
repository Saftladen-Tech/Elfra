<script setup>
const { data: home_content } = await useAsyncData('home_content', () => queryCollection('content').path("/home").first());
</script> 

<template>
  <div>
    Home
    <placeholder />
    <ContentRenderer :value="home_content" />
  </div>
</template>