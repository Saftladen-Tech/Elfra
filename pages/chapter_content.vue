<script setup lang="ts">
const {data: content} = await useAsyncData('/courses/test-course/3-deepdive/1-theway', () => {
  return queryCollection('content').path('/courses/test-course/3-deepdive/1-theway').first()
})
</script>

<template>
  <div class="flex flex-col min-h-screen xl:px-28 my-20 grow">
    <h1 id="md-course" class="text-5xl font-bold text-prmry-500">{{ content.title }}</h1>
    <div data-testid="content" class="bg-white p-5 rounded-lg min-h-full my-4 text-black border light:border-black dark:border-prmry-500/50">
      <h2 id="md-topic" class="text-4xl font-semibold mb-5">{{ content.description }}</h2>
      <ContentRenderer class="text-xl font-regular" :value="content.body" />
    </div>
    <div id="buttons" class="flex justify-between my-3">
      <UButton color="primary" variant="outline" class="px-14 py-4" to="/">Zurück</UButton>
      <UButton color="primary" variant="outline" class="px-14 py-4" to="/">Weiter</UButton>
    </div>
  </div>
</template>