<script setup lang="ts">
const route = useRoute()
const currentcourse = useCookie('selectedcourse')

currentcourse.value = route.params.course
const currentchapter = route.params.chapter

const { data: start_page } = await useAsyncData("start_page", () => {
  return queryCollection('course_content')
    .where('path', 'LIKE', "%/"+ currentcourse.value + "/" + currentchapter + "/%")
    .first()
})

const { data: chapters } = await useAsyncData("chapters", () => {
  return queryCollection('folders')
    .where('stem', 'LIKE', "%/"+ currentcourse.value + "/%")
    .andWhere(query => query.where('type', '=', "chapter").where("title", "=", currentchapter))
    .first()
})
</script>


<template>
  <div class="flex justify-center items-center grow">
      <div data-testid="contentwrapper" class="flex flex-col justify-center items-center max-w-[800px] space-y-8">
        <h1 class="text-8xl font-semibold dark:drop-shadow-glow-lg drop-shadow-glow-dark-lg">{{ route.params.chapter }}</h1>
        <p class="text-4xl text-center bg-transparent">{{ chapters?.description }}</p>
        <UButton data-testid="startbtn" variant="ghost" size="xl" icon="i-heroicons-arrow-down" :to="start_page?.path"></UButton>
      </div>
  </div>
</template>