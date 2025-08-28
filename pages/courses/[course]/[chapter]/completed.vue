<script setup lang="ts">
definePageMeta({
  middleware: 'check-selection',
})
const route = useRoute()
const restart_route = "/courses/" + route.params.course + "/" + route.params.chapter

const currentcourse = useCookie('selectedcourse')

const currentchapter = route.params.chapter

const { data: chapters } = await useAsyncData("chapters", () => {
  return queryCollection('folders')
    .where('stem', 'LIKE', "%/"+ currentcourse.value +"/%")
    .andWhere(query => query.where('type', '=', "chapter"))
    .all()
})

const currentchapter_i = chapters?.value.findIndex(obj => obj.title === currentchapter)
const nextchapter = currentchapter_i + 1 < chapters.value.length ? chapters.value[currentchapter_i + 1].title : null

const nextroute = "/courses/" + route.params.course + "/" + nextchapter

</script>

<template>
  <div class="flex flex-col grow justify-center items-center">
    <div data-testid="contentwrapper" class="flex flex-col justify-center items-center text-center space-y-12">
      <div>
        <h1 class="sm:text-8xl text-3xl font-semibold">Kapitel abgeschlossen!</h1>
      </div>
      <div data-testid="icon" class="dark:text-success-500 text-success-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sm:size-64 size-44">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div data-testid="navigation" class="flex sm:space-x-24 space-x-4">
        <UButton variant="soft" icon="i-heroicons-arrow-left" class="flex justify-center items-center  p-4 sm:w-56 w-44 text-center sm:text-2xl text-lg" :to="restart_route">Wiederholen</UButton>
        <UButton variant="soft" trailing-icon="i-heroicons-arrow-right" class="flex justify-center items-center p-4 sm:w-56 w-44 text-center sm:text-2xl text-lg" v-if="nextchapter" :to="nextroute">Weiter</UButton>
        <UButton variant="soft" trailing-icon="i-heroicons-arrow-right" class="flex justify-center items-center p-4 sm:w-56 w-44 text-center sm:text-2xl text-lg" v-else :to="'/courses/'+route.params.course+'/finished'">Weiter</UButton>
      </div>
    </div>
  </div>
</template>