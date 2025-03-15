<script setup lang="ts">
import ChangeColorBtn from '~/components/ChangeColorBtn.vue';

</script>

<template>
  <div>
    <p class="w-full text-center">This is NAV</p>
    <ChangeColorBtn/>
    <slot />
    <p>This is Footer</p>
  </div>
</template>