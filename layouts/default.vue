<script setup lang="ts">
import { config } from "../config.js";
import ChangeColorBtn from '~/components/ChangeColorBtn.vue';

const liveuser = ref()
const useritems = ref()

const authenticationEnabled = config?.auth?.enabled ?? false;

if (authenticationEnabled === false) {
  console.warn("User authentication is disabled.");
} else {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  const LogOut = async () => {
  console.log("sign out user")
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    } else {
      navigateTo("/login")
    }
  }
  liveuser.value = user.value
  useritems.value = [
    [{
      label: liveuser?.value.email || 'Guest',
    }],
    [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-end-on-rectangle-20-solid',
    click: () => {
      LogOut()
    }
    }],
  ]
}

const links = ref([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  /* {
    label: 'About',
    icon: 'i-heroicons-information-circle',
    to: '/chapter_content',
  }, */
]);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header data-testid="header" class="flex px-20 h-32 items-center justify-center">
      <img src="public/images/logo.jpg" alt="Company Logo" class="w-24 h-24 rounded-full" />
      <UHorizontalNavigation :links="links" :ui="{icon: {base:'bg-gray-200 group-hover:dark:bg-prmry-500'}, before:'hover:before:bg-prmry-300/30'}" class="border-b border-gray-200 dark:border-gray-400 ml-24" />
      <div class="flex justify-center item-center mx-10">
        <ChangeColorBtn />
      </div>
      <UDropdown v-if="authenticationEnabled" :items="useritems" :ui="{background: 'bg-white dark:bg-drk-500', item: {icon: {
      active: 'text-err-500 dark:text-err-400',
      inactive: 'text-gray-700 dark:text-gray-200'
    },}}" :popper="{ placement: 'bottom-start' }">
        <UButton color="scndry" variant="ghost">
          <template #leading>
            <UAvatar data-testid="avatar" :alt="liveuser?.email" size="2xl" />
          </template>
        </UButton>
      </UDropdown>
    </header>
    <slot />
    <footer-costum />
  </div>
</template>