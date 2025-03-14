<script setup lang="ts">
import { createAuth0Client } from "@auth0/auth0-spa-js";
onMounted(async () => {
  const configureClient = async () => {
    const auth0Client = await createAuth0Client({
      domain: "https://dev-1m7zc7175r3e621x.eu.auth0.com",
      clientId: "YKgRGmxu2JOUfcVGrkZvmgnpXKgI7wF2",
    });
    return auth0Client;
  };
  const auth0 = await configureClient();
  console.log("created client", auth0);
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    console.log("authenticated");
  } else {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

    // Process the login state
    await auth0.handleRedirectCallback();

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
    } 

    const isAuthenticated = await auth0.isAuthenticated();
    console.log("Authentication:", isAuthenticated);
    if (!isAuthenticated) {
      console.log("not authenticated");
      await auth0.loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      });
    }
  }
});
const { data: home_content } = await useAsyncData('home_content', () => queryCollection('content').path("/home").first());
</script> 

<template>
  <UContainer>
    Home
    <placeholder />
    <ContentRenderer :value="home_content" />
    <UButton to="/login">Test</UButton>
    <UButton loading-auto @click="logout_func()" >Login</UButton>
  </UContainer>
</template>