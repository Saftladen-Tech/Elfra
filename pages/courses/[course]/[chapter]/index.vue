<script setup lang="ts">
const route = useRoute()
const currentcourse = useCookie('selectedcourse')

currentcourse.value = route.params.course

const { data: start_page } = await useAsyncData("start_page", () => {
  return queryCollection('course_content')
    .where('path', 'LIKE', "%/"+ currentcourse.value +"/%")
    .first()
})

</script>


<template>
  <div class="flex justify-center items-center grow">
      <div data-testid="contentwrapper" class="flex flex-col justify-center items-center max-w-[800px] space-y-8">
        <h1 class="text-8xl font-semibold dark:drop-shadow-glow-lg drop-shadow-glow-dark-lg">{{ route.params.chapter }}</h1>
        <p class="text-4xl text-center bg-transparent">Hier kommt eine kurze beschreibung der Topic hin. Kann alles mögliche sein!</p>
        <UButton data-testid="startbtn" variant="ghost" size="xl" icon="i-heroicons-arrow-down" :to="start_page?.path"></UButton>
      </div>
  </div>
</template>