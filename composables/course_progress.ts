export default async function courseProgress(currentPage_title: string) {
    const currentcourse = useCookie('selectedcourse')
    const progress = useCookie('course_progress')

    const { data: completecourse } = await useAsyncData('completecourse', () => {
        return queryCollection('course_content')
            .where('path', 'LIKE', "%/"+ currentcourse.value + "/%")
            .all()
    })

    if (currentPage_title === "finished") {
        progress.value.currentcourse.lastPos += 1
    } else {
        const currentPosPage = completecourse.value?.findIndex((item: any) => {
            return item.title === currentPage_title
        })

        progress.value += {currentcourse: {
            lenght: completecourse.value?.length+1,
            lastPos: currentPosPage,
        }}
    }

    console.log("### DEBUG ###")
    console.log(progress)
}