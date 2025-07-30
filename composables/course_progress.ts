export const getProg = async (course_title: String) => {
  const user = useSupabaseUser();
  const progress = 0;
  console.log("Getting data for");
  console.log(user.value?.id);
  console.log(user.value?.email);
  console.log(course_title);

  return progress;
};

export const initCourse = async () => {
  const user = useSupabaseUser();
  const currentcourse = useCookie("selectedcourse");
  const completecourse = await useAsyncData("complete_course", () => {
    return queryCollection("course_content")
      .where("path", "LIKE", "%/" + currentcourse.value + "/%")
      .all();
  });

  const course_length = completecourse.data.value?.length;

  console.log("Init data for");
  console.log(user.value?.id);
  console.log(user.value?.email);
  console.log("Course Progress - Init Values");
  console.log(currentcourse.value);
  console.log(course_length);
  console.log("Values are initialized");
};

export const setProg = async (pagetitle: String) => {
  const user = useSupabaseUser();
  const currentcourse = useCookie("selectedcourse");
  const currentPage_title = pagetitle;

  const completecourse = await useAsyncData("complete_course", () => {
    return queryCollection("course_content")
      .where("path", "LIKE", "%/" + currentcourse.value + "/%")
      .all();
  });

  const position = completecourse.data.value?.findIndex(
    (item) => item.title === currentPage_title
  );

  console.log("Setting data for");
  console.log(user.value?.id);
  console.log(user.value?.email);
  console.log("Course Progress - Set Values");
  console.log(currentcourse.value);
  console.log(currentPage_title);
  console.log(position);
  console.log("Values are set");
};

export const finishCourse = async () => {
  const currentcourse = useCookie("selectedcourse");
  const completecourse = await useAsyncData("complete_course", () => {
    return queryCollection("course_content")
      .where("path", "LIKE", "%/" + currentcourse.value + "/%")
      .all();
  });

  const course_length = completecourse.data.value?.length;
  const finishValue = course_length + 1;
};
