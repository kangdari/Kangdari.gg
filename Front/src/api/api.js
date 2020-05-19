import api from '../common/apiUtil';

// API 호출
export const getSummonerInfo = (summonerName) => {
    return api.get(`/summoner/search?summonerName=${summonerName}`);
}

// 소환사의 matchList 가져오기
export const getMatchList = (puuid) => {
    return api.get(`/summoner/match/list?puuid=${puuid}`);
}

// match 상세 정보 가져오기
export const getMatch = (match_id) => {
    return api.get(`/summoner/match/info?match_id=${match_id}`)
}