<template>
  <div class="flex flex-col items-center  min-h-screen">
    <div class="flex items-center space-x-4">
      <img src="public/images/logo.jpg" alt="Company Logo" class="w-16 h-16 rounded-full" />
      <h1 class="text-3xl font-semibold">Companyname</h1>
    </div>
    <slot />
    <footer class="absolute bottom-4 text-xs text-gray-400">
      ELFRA Framework – Github – MIT Licensed
    </footer>
  </div>
</template>