export default defineNuxtRouteMiddleware((to, from) => {
    let auth: boolean = true

    if (!auth) {
        console.log("Not Authenticated")
        return navigateTo('/login')
    } else {
        console.log("Authentication successful")
    }
  })