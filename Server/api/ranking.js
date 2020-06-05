const express = require("express");
const router = express.Router();

const { api_key } = require("../config/config");
const axios = require("axios");

// 챌린저 랭크(200명) 정보 가져오기
router.get(`/challenger`, async (req, res) => {
  const getRanking = axios.get(
    `https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=${api_key}`
  );

  return getRanking.then((ranking) => {
    const rankList = ranking.data.entries;
    // 리그포인트 내림차순 정렬
    rankList.sort((a, b) => b.leaguePoints - a.leaguePoints);
    res.status(200).json({ rankList });
  });
});

module.exports = router;
