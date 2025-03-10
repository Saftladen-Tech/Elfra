export default defineNuxtRouteMiddleware((to, from) => {
    let auth: boolean = true

    if (!auth) {
        return navigateTo('/login')
    }
  })