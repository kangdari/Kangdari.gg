const express = require("express");
const router = express.Router();

const { api_key } = require("../config/config");
const axios = require("axios");

// puuid로 소환사명 검색
router.get("/searchBypuuid?:id", async (req, res) => {
  const summonerPuuid = encodeURI(req.query.puuid);
  const name = await axios
    .get(
      `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${summonerPuuid}?api_key=${api_key}`
    )
    .then((res) => res.data.name)
    .catch((err) => res.json({ err }));
  res.json({ name });
});

// 아이디 검색
router.get("/search?:summonerName", async (req, res) => {
  const summonerName = encodeURI(req.query.summonerName);
  const summonerInfo = [];

  await axios
    .get(
      `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${api_key}`
    )
    .then((res) => {
      summonerInfo.push(res.data);
    })
    .catch((err) => res.json({ err }));

  const {
    // accountId,
    id,
    name,
    puuid,
    summonerLevel,
    profileIconId,
    revisionDate,
  } = summonerInfo[0];

  res.json({
    // accountId,
    id,
    name,
    puuid,
    summonerLevel,
    profileIconId,
    revisionDate,
  });
});

// averageRank 검색
router.get("/match/rank?:puuid", async (req, res) => {
  const puuid = req.query.puuid;
  let total = 0;
  const count = 1; // 평균 등수 경기 수

  const getMatchList = axios.get(
    `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${count}&api_key=${api_key}`
  );

  // 각 경기를 검색하여 유저의 각 판 등수르 합하여 평균 등수 얻어냄
  // count = 경기 수 // api 요청 수 제한으로 현재 10판만 얻어냄
  const getAverageRank = async (matches) => {
    await Promise.all(
      matches.map(async (match_id) => {
        await axios
          .get(`https://asia.api.riotgames.com/tft/match/v1/matches/${match_id}?api_key=${api_key}`)
          .then((res) => {
            const rank = res.data.info.participants.find((user) => user.puuid === puuid).placement;
            total += rank;
          })
          .catch((err) => res.json({ err }));
      })
    );
    return total;
  };

  return getMatchList
    .then(async (matchList) => {
      const matches = matchList.data;
      await getAverageRank(matches).then((total) =>
        res.status(200).json({ averageRank: total / count })
      );
    })
    .catch((err) => res.json(err));
});

// 각 match의 정보 검색
router.get("/match/info", async (req, res) => {
  const { puuid } = req.query;
  const count = 20; // 평균 등수 경기 수

  let wins = 0; // 1등
  let tops = 0; // top
  const rankArr = []; // 각 경기별 등수 배열

  // count 만큼 검색
  const getMatchList = axios.get(
    `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${count}&api_key=${api_key}`
  );

  // matchInfo 각 match의 정보를 정리
  // matches.map문을 순회하는 과정에서 rank값을 순차적으로 뽑아내지 않고
  // 비동기 작업이 완료된 순으로 뽑아내고 있어 등수 순서가 맞지않음.
  // 순회를 순차적으로 완료하도록 수정이 필요
  // map => for...of 문으로 변경 => 순차(직렬) 처리
  const getMatchInfo = async (matches) => {
    const matchInfo = [];
    for (const match_id of matches) {
      // const participantsNameArr = []; // 매치 유저 이름 배열
      await axios
        .get(`https://asia.api.riotgames.com/tft/match/v1/matches/${match_id}?api_key=${api_key}`)
        .then(async (res) => {
          const { info } = res.data;
          const {
            game_datetime,
            // game_length,
            game_variation,
            participants,
          } = info;

          // 등수 총합
          const rank = info.participants.find((user) => user.puuid === puuid).placement;
          rankArr.push(rank);

          if (rank === 1) wins++;
          // 1등
          else if (rank >= 2 && rank <= 4) tops++; // 2 ~ 4등

          // 8명 유저 이름 구하기
          // 직렬적...>> 느림  ==> 병렬 수행으로 변경 필요
          // riot api 요청 수 제한으로 인해서 api 요청 불가 // 최대 10게임 정도 가능
          // for (const participant of participants) {
          //   await axios
          //     .get(
          //       `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${participant.puuid}?api_key=${api_key}`
          //     )
          //     .then((res) => participantsNameArr.push(res.data.name));
          // }

          matchInfo.push({
            puuid,
            game_datetime, // 게임 날짜
            game_variation, // 은하계 모드
            participants, // 유저
            // participantsNameArr, // 유저 이름 배열(8명) // 요청 수 제한으로 일단 코드 제외
          });
        });
    }

    // matchInfo
    return {
      matchInfo,
      wins,
      tops,
      rankArr,
    };
  };

  return getMatchList.then(async (matchList) => {
    const matches = matchList.data;
    await getMatchInfo(matches).then((matchInfo) => {
      res.status(200).json({ matchInfo });
    });
  });
});

// 소환사의 리그 정보
router.get("/league/info", async (req, res) => {
  const { summonerId } = req.query;
  const leagueInfo = [];
  // leagueInfo, 소환사의 랭크, 점수, 등등...
  const getLeagueInfo = axios.get(
    `https://kr.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${api_key}`
  );

  await getLeagueInfo.then((league) => {
    // TFT MATCH 정보 없음
    if (league.data.length === 0) {
      leagueInfo.push({
        tier: "unranked",
        rank: "",
        leaguePoints: 0,
        wins: 0,
        losses: 0,
        summonerName: "",
      });
      return res.json({ leagueInfo, message: "전적 없음" });
    }

    const { tier, rank, leaguePoints, wins, losses, summonerName, summonerId } = league.data[0];
    leagueInfo.push({
      tier,
      rank,
      leaguePoints,
      wins,
      losses,
      summonerName,
    });

    // TFT match 정보가 있을 때
    return res.status(200).json({ leagueInfo });
  });
});

module.exports = router;
