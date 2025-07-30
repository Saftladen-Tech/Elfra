export const getProg = async (course_title: String) => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
  console.log("Getting data for");
  console.log(user.value?.id);
  console.log(user.value?.email);
  console.log(course_title);

  interface Progress_tracking {
    user_id: string;
    course_name: string;
    current_position: number;
    course_length: number;
  }

  const { data: checkdata, error: checkerror } = await supabase
    .from("progress_tracking")
    .select("*")
    .eq("user_id", user.value?.id)
    .eq("course_name", currentcourse.value);

  return (100 / checkdata[0].course_length) * checkdata[0].current_position;
};

export const initCourse = async () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
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

  interface Progress_tracking {
    user_id: string;
    course_name: string;
    current_position: number;
    course_length: number;
  }

  const { data: checkdata, error: checkerror } = await supabase
    .from("progress_tracking")
    .select("*")
    .eq("user_id", user.value?.id)
    .eq("course_name", currentcourse.value);

  console.log(checkdata);

  if (checkdata?.length) {
    // User progress exists, update it
    const { data, error } = await supabase
      .from("progress_tracking")
      .update<Progress_tracking>({
        current_position: 0,
        course_length: course_length,
      })
      .eq("user_id", user.value?.id)
      .eq("course_name", currentcourse.value)
      .select();

    if (error) {
      console.error("Error updating progress:", error);
    } else {
      console.log("Progress updated:", data);
    }
  } else {
    // No progress exists, create it
    const { data, error } = await supabase
      .from("progress_tracking")
      .insert<Progress_tracking>({
        user_id: user.value?.id,
        course_name: currentcourse.value,
        current_position: 0,
        course_length: course_length,
      })
      .select();
  }

  console.log("Values are initialized");
};

export const setProg = async (pagetitle: String) => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
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

  interface Progress_tracking {
    user_id: string;
    course_name: string;
    current_position: number;
    course_length: number;
  }

  const { data: checkdata, error: checkerror } = await supabase
    .from("progress_tracking")
    .select("*")
    .eq("user_id", user.value?.id)
    .eq("course_name", currentcourse.value);

  console.log(checkdata);

  if (checkdata?.length) {
    // User progress exists, update it
    const { data, error } = await supabase
      .from("progress_tracking")
      .update<Progress_tracking>({
        current_position: position,
      })
      .eq("user_id", user.value?.id)
      .eq("course_name", currentcourse.value)
      .select();

    if (error) {
      console.error("Error updating progress:", error);
    } else {
      console.log("Progress updated:", data);
    }
  }
  console.log("Values are set");
};

export const finishCourse = async () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
  const currentcourse = useCookie("selectedcourse");
  const completecourse = await useAsyncData("complete_course", () => {
    return queryCollection("course_content")
      .where("path", "LIKE", "%/" + currentcourse.value + "/%")
      .all();
  });

  const { data: checkdata, error: checkerror } = await supabase
    .from("progress_tracking")
    .select("*")
    .eq("user_id", user.value?.id)
    .eq("course_name", currentcourse.value);

  console.log(checkdata);

  const course_length = completecourse.data.value?.length;
  const finishValue = course_length;

  interface Progress_tracking {
    user_id: string;
    course_name: string;
    current_position: number;
    course_length: number;
  }

  if (checkdata?.length) {
    // User progress exists, update it
    const { data, error } = await supabase
      .from("progress_tracking")
      .update<Progress_tracking>({
        current_position: finishValue,
      })
      .eq("user_id", user.value?.id)
      .eq("course_name", currentcourse.value)
      .select();

    if (error) {
      console.error("Error updating progress:", error);
    } else {
      console.log("Progress updated:", data);
    }
  }
};
