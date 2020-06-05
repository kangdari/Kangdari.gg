// 리그포인트 기준 내림차순 정렬
export const getSortedRanklist = async (...rankList) => {
    const sortedArr = await rankList.sort((a, b) => b.leaguePoints - a.leaguePoints)
    console.log(sortedArr)
    // return rankList;
}
