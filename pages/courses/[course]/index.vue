<script setup lang="ts">
const route = useRoute()
const currentcourse = useCookie('selectedcourse')

currentcourse.value = route.params.course

const { data: chapters } = await useAsyncData("chapters", () => {
  return queryCollection('folders')
    .where('stem', 'LIKE', "%/"+ currentcourse.value +"/%")
    .andWhere(query => query.where('type', '=', "chapter"))
    .first()
})

const start_chapter = chapters.value?.title
const start_route = "/courses/" + currentcourse.value + "/" + start_chapter
</script>


<template>
  <div class="flex grow justify-center items-center">
    <div data-testid="contentwrapper" class="flex flex-col justify-center items-center text-center space-y-24 py-12">
      <h1 class="sm:text-9xl text-6xl font-bold dark:drop-shadow-glow-dark-lg drop-shadow-glow-bright-lg">{{ currentcourse }}</h1>
      <UButton variant="outline" size="xl" class="px-14 py-4 text-3xl" :to="start_route">Start</UButton>
    </div>
  </div>
</template>