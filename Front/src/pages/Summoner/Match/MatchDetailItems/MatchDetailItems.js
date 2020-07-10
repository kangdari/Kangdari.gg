import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { getGameTime, getRound } from "../../../../common/gameUtil";
import { getSummonerNameByid } from "../../../../api/api";

import Traits from "../Traits";
import Units from "../Units";

import { CircularProgress } from "@material-ui/core";

const MatchDetailItem = ({ participant, name }) => {
  const { gold_left, placement, level, last_round, time_eliminated, traits, units } = participant;
  const { minute, second } = getGameTime(time_eliminated);
  // 라운드 구하기
  const { r, remain } = getRound(last_round);

  return (
    <tbody>
      <tr>
        <td className="placement">{placement}</td>
        <td className="summoner">
          <NavLink to={`/summoner/${name}`}>{name}</NavLink>
        </td>
        <td className="level">{level}</td>
        <td className="round">
          {r}-{remain}
        </td>
        <td className="time_eliminated">
          {minute}:{second}
        </td>
        <td className="traits">
          <Traits traits={traits} />
        </td>
        <td className="units">
          <Units units={units} />
        </td>
        <td className="gold_left">{gold_left}</td>
      </tr>
    </tbody>
  );
};

const MatchDetailItems = ({ participants }) => {
  const [loading, setLoading] = useState(false);
  const [participantNameArr, setParticipantNameArr] = useState([]);
  // 순위 오름차순으로 정렬
  participants.sort((a, b) => a.placement - b.placement);

  // useEffect 이름 가져오기, set loading 설정
  useEffect(() => {
    setLoading(false);
    const nameArr = [];

    // for..of 문을 이용한 직렬 비동기 처리 방식.
    // Serialization
    // const getParticipantName1 = async () => {
    //     console.time("calculatingTime");
    //     for(const participant of participants){
    //         await getSummonerNameByid(participant.puuid).then(res => nameArr.push(res.data.name))
    //     }
    //     setParticipantNameArr(nameArr);
    //     setLoading(true);
    //     console.timeEnd("calculatingTime");
    // }

    // puuid로 name 검색 api 함수
    const getName = async (id) => {
      await getSummonerNameByid(id).then((res) => nameArr.push(res.data.name));
    };

    // Parallelization 1s~1.3s
    // Promise.all()은 Promise 함수들을 한꺼번에 handling할 수 있도록 해주지만 순차적으로 실행시키지 않아
    // 각 함수들은 병렬 실행되고 비동기이기 때문에 각 함수들이 수행되는 시간은 일정하지 않다.
    // 즉, 순서가 보장되지 않는다.
    // participants 배열은 현재 순위 순으로 정렬되어있는 상태이다.
    // 아래 방법으로 수행시 소환사명이 순위 순에 맞게 순차적으로 나오지 않고 요청마다 다른 순서로 나온다.
    // const getParticipantName2 = async () => {
    //     console.time("calculatingTime");
    //     const arrayPromise =  participants.map(participant => getName(participant.puuid));
    //     await Promise.all(arrayPromise);
    //     setParticipantNameArr(nameArr);
    //     setLoading(true);
    //     console.timeEnd("calculatingTime");
    // }

    // reduce를 사용하여 Promise.all() 순차적 병렬 실행
    // 2.4s ~
    const getParticipantName3 = async () => {
      participants
        .reduce((prevProm, participant) => {
          return prevProm.then(() => getName(participant.puuid));
        }, Promise.resolve())
        .then(() => {
          // 성공 후 처리
          setParticipantNameArr(nameArr);
          setLoading(true);
        });
    };

    getParticipantName3();
  }, [participants]);

  if (!loading) {
    return (
      <LoadingBox>
        <CircularProgress />
      </LoadingBox>
    );
  }

  return (
    <MatchDetailContainer>
      <table>
        <thead>
          <tr>
            <th>등수</th>
            <th>소환사</th>
            <th>레벨</th>
            <th>라운드</th>
            <th>생존시간</th>
            <th>시너지</th>
            <th>챔피언</th>
            <th>잔여골드</th>
          </tr>
        </thead>
        {participants.map((participant, i) => (
          <MatchDetailItem participant={participant} name={participantNameArr[i]} key={i} />
        ))}
      </table>
    </MatchDetailContainer>
  );
};

export default MatchDetailItems;

const MatchDetailContainer = styled.div`
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  font-size: 12px;

  table {
    width: 100%;
    position: relative;
    min-width: 960px;
    border-collapse: collapse;
    margin: 0;
    padding: 0;

    th {
      /* height: 32px; */
      background-color: #e6e6e6;
      color: #646464;
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      padding: 10px 0;
    }
    td {
      vertical-align: middle;
    }
    tbody {
      background: #fff;
    }

    .placement {
      width: 40px;
      height: 40px;
    }
    .summoner {
      min-width: 140px;
      width: auto;
    }
    .level {
      width: 40px;
    }
    .round {
      width: 60px;
    }
    .time_eliminated {
      width: 60px;
    }
    .traits {
      width: 240px;
    }
    .units {
      width: 330px;
    }
    .gold_left {
      width: 75px;
      text-align: center;
    }

    .placement,
    .level,
    .round,
    .time_eliminated {
      text-align: center;
      @media (min-width: 992px) {
        width: 75px;
      }
    }
  }
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
