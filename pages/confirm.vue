<script setup lang="ts">
const user = useSupabaseUser()
const redirectInfo = useSupabaseCookieRedirect()

watch(user, () => {
  if (user.value) {
    // Get redirect path, and clear it from the cookie
    const path = redirectInfo.pluck()
    // Redirect to the saved path, or fallback to home
    return navigateTo(path || '/') 
  }
}, { immediate: true })
</script>

<template>
  <div data-testid="contentwrapper" class="flex grow flex-col justify-center items-center text-center pb-28">
    <p class="text-7xl text-warn-500">Waiting for Login ...</p>
  </div>
</template>

