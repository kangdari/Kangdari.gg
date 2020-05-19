const express = require('express');
const router = express.Router();

const { api_key } = require('../config/config');
const axios = require('axios');

// 아이디 검색
router.get('/search?:summonerName', async (req, res) => {
    const summonerName = req.query.summonerName;
    const { data } = await axios.get(`https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${api_key}`)
    const { accountId, id, name, puuid, summonerLevel } = data;
    res.json({ accountId, id, name, puuid, summonerLevel })
})

// puuid > match List
router.get('/match/list?:puuid', async (req, res) => {
    const puuid = req.query.puuid;
    // count: match 수
    const { data } = await axios.get(`https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=3&api_key=${api_key}`)
    res.json({ matchList: data });
})

router.get(`/match/info`, async (req, res) => {
    const { match_id } = req.query;
    const { data } = await axios.get(`https://asia.api.riotgames.com/tft/match/v1/matches/${match_id}?api_key=${api_key}`);
    // 참가자 아이디 > puuid
    // console.log(data)

    const info = data.info
    
    // 여기서 각 매치의 정보를 정리하여 클라이언트에 전달

    res.json({ info })
})

module.exports = router;