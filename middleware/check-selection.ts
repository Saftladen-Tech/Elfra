export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes("courses")) {
    const currentcourse = useCookie("selectedcourse");
    console.log(currentcourse.value);
    if (currentcourse.value === undefined) {
      throw createError({
        statusCode: 403,
        statusMessage: "Can't access courses manually!",
      });
    }
  }
});
