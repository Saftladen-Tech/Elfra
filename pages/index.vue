<script setup lang="ts">
import { createAuth0Client, Auth0Client } from "@auth0/auth0-spa-js";

let auth0 = ref<Auth0Client | null>(null);
const isLoading = ref(true);
const isAuthenticated = ref(false);

const configureClient = async () => {
  auth0.value = await createAuth0Client({
    domain: "https://dev-1m7zc7175r3e621x.eu.auth0.com",
    clientId: "YKgRGmxu2JOUfcVGrkZvmgnpXKgI7wF2",
  });
  console.log("created client", auth0.value);
};

const logout_func = async () => {
  if (auth0.value) {
    await auth0.value.logout({
      returnTo: "http://localhost:3000/logout",
    });
  }
};

onMounted(async () => {
  await configureClient();
  console.log("created client", auth0.value);
  isAuthenticated.value = await auth0.value?.isAuthenticated();
  if (isAuthenticated.value) {
    console.log("authenticated");
  } else {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

    await auth0.value?.handleRedirectCallback();

    window.history.replaceState({}, document.title, "/");
    } 

    isAuthenticated.value = await auth0.value?.isAuthenticated();
    console.log("Authentication:", isAuthenticated);
    if (!isAuthenticated.value) {
      console.log("not authenticated");
      await auth0.value?.loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      });
    }
  }
  isLoading.value = false;
});
const { data: home_content } = await useAsyncData('home_content', () => queryCollection('content').path("/home").first());
</script> 

<template>
  <div v-if="isLoading"></div>
  <div v-else-if="isAuthenticated">
  <UContainer>
    Home
    <placeholder />
    <ContentRenderer :value="home_content" />
    <UButton to="/login">Test</UButton>
    <UButton loading-auto @click="logout_func" >Logout</UButton>
  </UContainer>
  </div>
  <div v-else>
    <UContainer>
      You need to be logged on to view this page
    </UContainer>
  </div>
</template>