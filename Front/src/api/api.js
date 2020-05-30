import api from '../common/apiUtil';

// 소환사명 검색
export const getSummonerInfo = (summonerName) => {
    return api.get(`/summoner/search?summonerName=${summonerName}`);
}

export const getSummonerNameByid = (summonerPuuid) => {
    return api.get(`/summoner/search2?puuid=${summonerPuuid}`)
}

// 소환사의 전체 matchList 
export const getAverageRank = (puuid) => {
    return api.get(`/summoner/match/rank?puuid=${puuid}`);
}

// match 상세 정보 
export const getMatchInfo = (puuid) => {
    return api.get(`/summoner/match/info?puuid=${puuid}`);
}

// 소환사의 리그 정보 ( 티어, 점수 등 ... )
export const getSummonerLeagueInfo = (summonerId) => {
    return api.get(`/summoner/league/info?summonerId=${summonerId}`);
}

