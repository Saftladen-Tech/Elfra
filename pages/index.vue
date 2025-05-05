<script setup>
import { UBadge, UTable } from '#components';

const currentcourse = useCookie('selectedcourse')

currentcourse.value = "nothing-selected"

const { data: crs } = await useAsyncData('navigation', () => {
  return queryCollection('folders')
  .where('type', '==', "course")
  .all()
})

const columns = [
  { key: 'published', label: 'Published'},
  { key: 'topic', label: 'Topic'},
  { key: 'name', label: 'Name'},
  { key: "path"}
];

const topics = {
  "it": "primary",
  "test": "red",
  "xyz": "blue",
}

const rows = Object.values(crs.value).map((course) => {
  const tp = course.topic.toLowerCase()
  let tp_clr = 'red'
  
  if (tp in topics){
    tp_clr = topics[tp];
  }

  return {
    published: course.published,
    topic: {
      label: course.topic,
      color: tp_clr
    },
    name: course.title,
    path: "/courses/"+ course.title,
  }
})
</script> 

<template>
  <div data-testid="contentwrapper" class="flex flex-col w-full max-w-5xl mx-auto mt-8 grow">
    <h1 class="text-7xl mb-4 text-prmry-500">Welcome to Elfra</h1>
    <p class="text-5xl mb-12">the Framework for e-learning and WBTs</p>
    <UDivider icon="i-heroicons-book-open" size="sm" :ui="{border:{base:'dark:border-gray-400'}, container:{base:'dark:text-white'}}"></UDivider>
    <h2 class="text-3xl mt-6 mb-4">Webbasedtrainings and Content</h2>

    <UTable data-testid="courseTable" :rows="rows" :columns="columns" class="rounded-lg border border-gray-400" :ui="{tr: {base: 'group hover:bg-black/5 dark:hover:bg-white/5'},td: {color:'dark:text-gray-50'}, divide:'dark:divide-gray-300', tbody:'dark:divide-gray-400'}">
      <template #topic-data="{ row }">
        <UBadge :label="row.topic.label" :color="row.topic.color" variant="soft" ></UBadge>
      </template>
      <template #path-data="{ row }">
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <UButton color="primary" variant="outline" class="w-full justify-center py-2" :to="row.path">Start</UButton>
        </div>
      </template>
    </UTable>
  </div>
</template>