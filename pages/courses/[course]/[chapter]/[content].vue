<script setup lang="ts">
const route = useRoute()
const currentcourse = useCookie('selectedcourse')

currentcourse.value = route.params.course
const currentchapter = route.params.chapter
const currentchapterroute = "/courses/" + currentcourse.value + "/" + currentchapter

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('course_content').path(route.path)
    .where('path', 'LIKE', "%/"+ currentcourse.value + "/" + currentchapter + "/%")
    .first()
})

const { data } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('course_content', route.path)
    .where('path', 'LIKE', "%/"+ currentcourse.value + "/" + currentchapter + "/%")
})
</script>

<template>
  <div class="flex flex-col min-h-screen xl:px-28 my-20 grow">
    <h1 id="md-course" class="text-5xl font-bold text-prmry-500">{{ currentcourse }} - {{ route.params.chapter }}</h1>
    <div data-testid="content" class="bg-white p-5 rounded-lg min-h-full my-4 text-black border light:border-black dark:border-prmry-500/50">
      <h2 id="md-topic" class="text-4xl font-semibold mb-5">{{ page?.title }}</h2>
      <ContentRenderer class="text-xl font-regular" :value="page?.body" />
    </div>
    <div id="buttons" class="flex justify-between my-3">
      <UButton color="primary" variant="outline" class="px-14 py-4" v-if="data?.[0]" :to="data[0].path">Zurück</UButton>
      <UButton color="primary" variant="outline" class="px-14 py-4" v-else disabled>Zurück</UButton>
      <UButton color="primary" variant="outline" class="px-14 py-4" v-if="data?.[1]" :to="data[1].path">Weiter</UButton>
      <UButton color="primary" variant="outline" class="px-14 py-4" v-else :to="currentchapterroute + '/completed'" >Weiter</UButton>
    </div>
  </div>
</template>