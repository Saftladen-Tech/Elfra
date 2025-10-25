<script setup lang="ts">
import { UBadge, UTable } from '#components';
import {config} from '@/customconfig/config';

const currentcourse = useCookie('selectedcourse')

currentcourse.value = "nothing-selected"

const { data: crs } = await useAsyncData('navigation', () => {
  return queryCollection('folders')
  .where('type', '=', "course")
  .all()
})

for (const course of crs.value) {
  await initCourse(course.title);
}

const cp = await Promise.all(
  crs.value.map(async (course) => {
    const progress = await getProg(course.title);
    return { title: course.title, progress };
  }));

let columns = [
    { key: 'name', label: 'Name'},
    { key: 'topic', label: 'Topic'},
    { key: 'published', label: 'Published'},
    { key: "path"} // Allways use as last column! Last Column is always hidden and absolute!
  ];

if (config.auth.enabled) {
  columns = [
    { key: 'name', label: 'Name'},
    { key: 'topic', label: 'Topic'},
    { key: 'published', label: 'Published'},
    { key: 'progress', label: 'Progress'},
    { key: "path"} // Allways use as last column! Last Column is always hidden and absolute!
  ];
}

const topics = config.topics.reduce((acc, topic) => {
  acc[topic.name.toLowerCase()] = topic.color;
  return acc;
}, {});

const rows = Object.values(crs.value).map((course) => {
  const tp = course.topic.toLowerCase()
  let tp_clr = 'red'
  
  if (tp in topics){
    tp_clr = topics[tp];
  }

  if (config.auth.enabled) {
    return {
      published: course.published,
      topic: {
        label: course.topic,
        color: tp_clr
      },
      progress: cp.find((p) => p.title === course.title)?.progress,
      name: course.title,
      path: "/courses/"+ course.title,
    }
  } else {
    return {
      published: course.published,
      topic: {
        label: course.topic,
        color: tp_clr
      },
      name: course.title,
      path: "/courses/"+ course.title,
    }
  }
});
</script>

<template>
  <div data-testid="contentwrapper" class="flex flex-col w-full max-w-5xl mx-auto sm:mt-8 mt-0 grow">
    <h1 class="sm:text-7xl text-4xl mb-4 text-prmry-500">Welcome to Elfra</h1>
    <p class="sm:text-5xl text-2xl sm:mb-12 mb-6">the Framework for e-learning and WBTs</p>
    <UDivider icon="i-heroicons-book-open" size="sm" :ui="{border:{base:'dark:border-gray-400'}, container:{base:'dark:text-white'}}"></UDivider>
    <h2 class="text-3xl mt-6 mb-4">Webbasedtrainings and Content</h2>

    <UTable data-testid="courseTable" :rows="rows" :columns="columns" class="rounded-lg border border-gray-400" :ui="{tr: {base: 'group'},th: {base: 'last:w-0 last:p-0 transition-all duration-500'},td: {color:'dark:text-gray-50', base: 'group-hover:bg-black/5 dark:group-hover:bg-white/5 last:w-2/5 last:p-0 transition-all duration-500'}, divide:'dark:divide-gray-300', tbody:'dark:divide-gray-400'}">
      <template #topic-data="{ row }">
        <UBadge :label="row.topic.label" :color="row.topic.color" variant="soft" ></UBadge>
      </template>
      <template #progress-data="{ row }">
        <div class="flex items-center p-2 h-full w-full transition-all duration-500">
          <UBadge :label="(row.progress ?? 0) + '%'" :color="(row.progress ?? 0) == 100 ? 'green' : (row.progress ?? 0) < 100 && (row.progress ?? 0) > 0 ? 'yellow' : 'red'" variant="soft" class="w-full justify-center"></UBadge>
        </div>
       <UProgress :value="parseInt(row.progress ?? 0)" :label="row.progress ?? 0" class="w-full" :ui="{bar: {base: 'dark:bg-gray-500'}}"></UProgress>
      </template>
      <template #path-data="{ row }">
        <div class="flex items-center p-2 h-full w-full transition-all duration-500">
          <UButton color="primary" variant="solid" class="w-full justify-center" :to="row.path">Start</UButton>
        </div>
      </template>
    </UTable>
  </div>
</template>