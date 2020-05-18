import api from '../common/apiUtil';

// API 호출
export const getSummonerInfo = (summonerName) => {
    return api.get(`/summoner/search?summonerName=${summonerName}`);
}

