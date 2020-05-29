import champion from './champions.json'

export const getChampionInfo = (id) => {
    // 한글 챔피언 이름
    const kr_name = champion.find(item => item.championId === id).kr_name;
    // url 검색 용
    const img_name = id.slice(5).toLowerCase();

    return({
        kr_name,
        img_name
    })
}