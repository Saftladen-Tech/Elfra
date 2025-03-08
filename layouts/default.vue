<script setup lang="ts">
import ChangeColorBtn from '~/components/ChangeColorBtn.vue';

</script>

<template>
  <div>
    <p>This is Header</p>
    <ChangeColorBtn/>
    <slot />
    <p>This is Footer</p>
  </div>
</template>