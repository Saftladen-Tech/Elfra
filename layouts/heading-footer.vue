<template>
  <div class="relative min-h-screen">
    <div class="flex items-center justify-center space-x-5 h-64">
      <img src="public/images/logo.jpg" alt="Company Logo" class="w-24 h-24 rounded-full" />
      <h1 class="text-6xl font-bold">Companyname</h1>
    </div>
    <slot />
    <footer-costum />
  </div>
</template>