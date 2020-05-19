const express = require('express');
const router = express.Router();

const { api_key } = require('../config/config');
const axios = require('axios');

// 아이디 검색
router.get('/search?:summonerName', async (req, res) => {
    const summonerName = encodeURI(req.query.summonerName);
    
    const { data } = await axios.get(`https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${api_key}`)
    const { accountId, id, name, puuid, summonerLevel } = data;
    res.json({ accountId, id, name, puuid, summonerLevel })
})

// matchList 검색
router.get('/match/list?:puuid', async (req, res) => {
    const puuid = req.query.puuid;
    // count: match 수
    const { data } = await axios.get(`https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=3&api_key=${api_key}`)
    return res.json({ matchList: data });
})
// 각 match의 정보 검색
router.get('/match/info', async (req, res) => {
    const { puuid } = req.query;
    // matchList 얻어냄 (3개)
    const getMatchList = axios.get(`https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=3&api_key=${api_key}`)
    // matchInfo 각 match의 정보를 정리
    const getMatchInfo = async matches => {
        const matchInfo = [];

        await Promise.all(matches.map(async match_id => {
            await axios.get(`https://asia.api.riotgames.com/tft/match/v1/matches/${match_id}?api_key=${api_key}`)
                .then(res => {
                    const { metadata, info } = res.data;
                    const { game_datetime, game_length, game_variation, participants } = info;
                    // 데이터 정리
                    
                    // 검색한 summoer 정보
                    // console.log(participants.find(participant => participant.puuid === puuid) )

                    matchInfo.push({
                        puuid,
                        game_datetime,  // 게임 날짜
                        game_length,    // 게임 시간
                        game_variation, // 은하계 모드
                        participants,   // 유저
                    })
                    // summoner info
                    // 소환사 아이콘, 레벨, 지역, 
                });
        }))
        return matchInfo;
    }

    return getMatchList.then(async matchList => {
        const matches = matchList.data;
        await getMatchInfo(matches)
            .then(matchInfo => res.status(200).json({ matchInfo }))
    })
})

// 소환사의 리그 정보
router.get('/league/info', async (req, res) => {
    const { summonerId } = req.query;
    const leagueInfo = [];
    // leagueInfo, 소환사의 랭크, 점수, 등등...
    const getLeagueInfo = axios.get(`https://kr.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${api_key}`)

    await getLeagueInfo.then( league => {
        const { tier, rank, leaguePoints, wins, losses, summonerName, summonerId } = league.data[0];
        leagueInfo.push({
            tier,
            rank,
            leaguePoints,
            wins,
            losses,
            summonerName,
            summonerId
        });
    });

    // console.log(leagueInfo)
    return res.status(200).json({ leagueInfo })
})

module.exports = router;