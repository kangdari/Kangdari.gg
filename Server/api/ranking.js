const express = require("express");
const router = express.Router();

const { api_key } = require("../config/config");
const axios = require("axios");

// 챌린저~마스터 티어 별 랭킹 (200명) 정보 가져오기
router.get(`/tier`, async (req, res) => {
  const { tier } = req.query;
  const getRanking = axios.get(
    `https://kr.api.riotgames.com/tft/league/v1/${tier}?api_key=${api_key}`
  );

  return getRanking.then((ranking) => {
    const rankList = ranking.data.entries;
    // 리그포인트 내림차순 정렬
    rankList.sort((a, b) => b.leaguePoints - a.leaguePoints);
    res.status(200).json({
      rankList: rankList.slice(0, 200),
    });
  });
});

// 다이아 ~ 아이언 티어 별 랭킹(200명) 정보 가져오기
router.get(`/downtier`, async (req, res) => {
  const { tier } = req.query;
  const getRanking = axios.get(
    `https://kr.api.riotgames.com/tft/league/v1/entries/${tier}/I?page=1&api_key=${api_key}`
  );

  return getRanking.then((ranking) => {
    const rankList = ranking.data;
    // 리그포인트 내림차순 정렬
    rankList.sort((a, b) => b.leaguePoints - a.leaguePoints);
    res.status(200).json({
      rankList: rankList.slice(0, 200),
    });
  });
});

module.exports = router;
