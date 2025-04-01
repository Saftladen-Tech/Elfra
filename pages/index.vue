<script setup>
import { UBadge, UTable } from '#components';

const { data: home_content } = await useAsyncData('home_content', () => queryCollection('content').path("/home").first());
const columns = [
  { key: 'published', label: 'Published'},
  { key: 'topic', label: 'Topic'},
  { key: 'name', label: 'Name'},
];

const rows = [
  {
    published: 'Mar 16, 16:45',
    topic: { label: 'IT' , color: 'prmry' },
    name: 'VLANs',
  },
  {
    published: 'Apr 1, 16:20',
    topic: { label: 'Security', color: 'err' },
    name: 'Firewall',
  }
];
</script> 

<template>
  <div class="flex flex-col w-full max-w-5xl mx-auto mt-8 grow">
    <h1 class="text-7xl mb-4 text-prmry-500">Welcome to Elfra</h1>
    <p class="text-5xl mb-12">the Framework for e-learning and WBTs</p>
    <UDivider icon="i-heroicons-book-open" size="sm" :ui="{border:{base:'dark:border-gray-400'}, container:{base:'dark:text-white'}}"></UDivider>
    <h2 class="text-3xl mt-6 mb-4">Webbasedtrainings and Content</h2>

    <UTable :rows="rows" :columns="columns" class="rounded-lg border border-gray-400" :ui="{td: {color:'dark:text-gray-50'}, divide:'dark:divide-gray-300', tbody:'dark:divide-gray-400'}">
      <template #topic-data="{ row }">
        <UBadge :label="row.topic.label" :color="row.topic.color" variant="soft" ></UBadge>
      </template>
    </UTable>
  </div>
</template>