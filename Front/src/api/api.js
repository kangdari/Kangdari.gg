import api from "../common/apiUtil";

// 소환사명 검색
export const getSummonerInfo = (summonerName) => {
  return api.get(`/summoner/search?summonerName=${summonerName}`);
};

export const getSummonerNameByid = (summonerPuuid) => {
  return api.get(`/summoner/searchBypuuid?puuid=${summonerPuuid}`);
};

// 소환사의 전체 matchList
export const getAverageRank = (puuid) => {
  return api.get(`/summoner/match/rank?puuid=${puuid}`);
};

// match 상세 정보
export const getMatchInfo = (puuid) => {
  return api.get(`/summoner/match/info?puuid=${puuid}`);
};

// 소환사의 리그 정보 ( 티어, 점수 등 ... )
export const getSummonerLeagueInfo = (summonerId) => {
  return api.get(`/summoner/league/info?summonerId=${summonerId}`);
};
// 챌린저, 그마, 마스터 랭킹 (200명) 정보
export const getTopTierRanking = (tier) => {
  return api.get(`/ranking/tier?tier=${tier}`);
};
// 다이아 ~ 아이언
export const getDownTierRanking = (tier) => {
  return api.get(`/ranking/downtier?tier=${tier}`);
};
