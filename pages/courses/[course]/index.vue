<script setup lang="ts">
const route = useRoute()
const currentcourse = useCookie('selectedcourse')

currentcourse.value = route.params.course

const { data: start_page } = await useAsyncData("start_page", () => {
  return queryCollection('chapters')
    .where('path', 'LIKE', "%/"+ currentcourse.value +"/%")
    .first()
})

const start_chapter = start_page.value?.path
console.log("Start chapter: ", start_chapter)
const start_route = "/courses/" + currentcourse.value + "/" + start_chapter?.split('/').slice(-2)[0]
</script>


<template>
  <div class="flex grow justify-center items-center">
    <div data-testid="contentwrapper" class="flex flex-col justify-center items-center text-center space-y-24 py-12">
      <h1 class="text-9xl font-bold dark:drop-shadow-glow-dark-lg drop-shadow-glow-bright-lg">{{ currentcourse }}</h1>
      <UButton variant="outline" size="xl" class="px-14 py-4 text-3xl" :to="start_route">Start</UButton>
    </div>
  </div>
</template>