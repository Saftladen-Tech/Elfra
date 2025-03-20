<script setup lang="ts">
const md_topic_content = await queryCollection('content').path('/content_placeholder').first()
</script>

<template>
  <div class="flex flex-col min-h-screen xl:px-28 my-20">
    <h1 id="md-course" class="text-5xl font-bold text-prmry-500">Chapter xy</h1>
    <div id="content" class="bg-white p-5 rounded-lg min-h-full my-4 text-black">
      <h2 id="md-topic" class="text-4xl font-semibold mb-5">Topic xy</h2>
      <ContentRenderer class="text-xl font-regular" :value="md_topic_content" />
    </div>
    <div id="buttons" class="flex justify-between my-3">
      <UButton variant="outline" class="px-14 py-4">Zurück</UButton>
      <UButton variant="outline" class="px-14 py-4">Weiter</UButton>
    </div>
  </div>
</template>