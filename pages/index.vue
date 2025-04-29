<script setup>
import { UBadge, UTable } from '#components';

const { data: crs } = await useAsyncData('navigation', () => {
  return queryCollection('courses').all()
})

/* const groups = crs.value.reduce((cs, course) => {
    if (!cs[course.title]) cs[course.title] = { 
      title: course.title,
      topic: course.topic,
      text: `Course about ${course.title}`,
    };
    return cs;
  }, {}); */

/* console.log(groups); */

const columns = [
  { key: 'published', label: 'Published'},
  { key: 'topic', label: 'Topic'},
  { key: 'name', label: 'Name'},
];

const rows = Object.values(crs.value).map((course) => {
  return {
    published: course.published,
    topic: {
      label: course.topic,
      color: 'primary'
    },
    name: course.title,
  }
})
</script> 

<template>
  <div data-testid="contentwrapper" class="flex flex-col w-full max-w-5xl mx-auto mt-8 grow">
    <h1 class="text-7xl mb-4 text-prmry-500">Welcome to Elfra</h1>
    <p class="text-5xl mb-12">the Framework for e-learning and WBTs</p>
    <UDivider icon="i-heroicons-book-open" size="sm" :ui="{border:{base:'dark:border-gray-400'}, container:{base:'dark:text-white'}}"></UDivider>
    <h2 class="text-3xl mt-6 mb-4">Webbasedtrainings and Content</h2>

    <UTable data-testid="courseTable" :rows="rows" :columns="columns" class="rounded-lg border border-gray-400" :ui="{td: {color:'dark:text-gray-50'}, divide:'dark:divide-gray-300', tbody:'dark:divide-gray-400'}">
      <template #topic-data="{ row }">
        <UBadge :label="row.topic.label" :color="row.topic.color" variant="soft" ></UBadge>
      </template>
    </UTable>
  </div>
</template>