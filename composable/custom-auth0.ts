import { createAuth0Client, Auth0Client } from "@auth0/auth0-spa-js";

let auth0 = ref<Auth0Client | null>(null);
const isLoading = ref(true);
const isAuthenticated = ref(false);

const configureClient = async () => {
  auth0.value = await createAuth0Client({
    domain: "https://dev-1m7zc7175r3e621x.eu.auth0.com",
    clientId: "YKgRGmxu2JOUfcVGrkZvmgnpXKgI7wF2",
  });
  console.log("created client", auth0);
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
  console.log("created client", auth0);
  const isAuthenticated.value = await auth0.value?.isAuthenticated();
  if (isAuthenticated.value) {
    console.log("authenticated");
  } else {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

    // Process the login state
    await auth0.value?.handleRedirectCallback();

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
    } 

    const isAuthenticated.value = await auth0.value?.isAuthenticated();
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