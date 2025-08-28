<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
      // Redirect to protected page
      return navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
  <div data-testid="contentwrapper" class="flex grow flex-col justify-center items-center text-center pb-28">
    <p class="sm:text-7xl text-5xl text-warn-500">Waiting for Login ...</p>
  </div>
</template>

