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


module.exports = router;