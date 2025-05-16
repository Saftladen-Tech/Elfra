export const getProg = (course_title: String) => {
    const progress = useCookie('course_progress')
    const percent = progress.value?.currentcourse?.lastPos / progress.value?.currentcourse?.lenght * 100
    return percent
};

export const setProg = async (pagetitle: String) => {
    const progress = useCookie('course_progress')
    const currentcourse = useCookie('selectedcourse')
    const currentPage_title = pagetitle

    const completecourse = await useAsyncData('complete_course', () => {
        return queryCollection('course_content')
            .where('path', 'LIKE', "%/"+ currentcourse.value +"/%")
    })

    if (!progress.value.currentcourse){
        progress.value = {
            currentcourse: {
                lenght: completecourse.value?.length,
                lastPos: 0
            }
        }
    } else {
        if (currentPage_title === "finished") {
            if (progress.value && progress.value.currentcourse) {
                progress.value.currentcourse.lastPos += 1
            }
        } else {
            const currentPosPage = completecourse.value?.findIndex((item: any) => {
                return item.title === currentPage_title
            })

            progress.value += {currentcourse: {
                lenght: completecourse.value?.length+1,
                lastPos: currentPosPage,
            }}
        }
    }


    console.log("### DEBUG ###")
    console.log(progress)
}