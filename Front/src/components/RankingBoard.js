import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Pagination from "./Pagination/Pagination";

import { getTopTierRanking, getDownTierRanking } from "../api/api";

const RankItem = ({ rankInfo, rankNum, tier }) => {
  const { summonerName, leaguePoints, wins, losses, rank } = rankInfo;
  const winRate = ((wins / (wins + losses)) * 100).toFixed(1);

  if (!tier) {
    return (
      <>
        <div className="rankNum item">{rankNum + 1}</div>
        <div className="name item">
          <Link to={`/summoner/${summonerName}`}>{summonerName}</Link>
        </div>
        <div className="tier item">
          <img src={`//d287nhi7bqyj2m.cloudfront.net/emblems/CHALLENGER.png`} alt="tierImg" />
          challenger
        </div>
        <div className="lp item">{leaguePoints}LP</div>
        <div className="winRate item">{winRate}%</div>
        <div className="wins item">{wins}</div>
        <div className="losses item">{losses}</div>
      </>
    );
  }

  return (
    <>
      <div className="rankNum item">{rankNum + 1}</div>
      <div className="name item">
        <Link to={`/summoner/${summonerName}`}>{summonerName}</Link>
      </div>
      <div className="tier item">
        <img src={`//d287nhi7bqyj2m.cloudfront.net/emblems/${tier.toUpperCase()}.png`} alt="tierImg" />
        {tier} {rank}
      </div>
      <div className="lp item">{leaguePoints}LP</div>
      <div className="winRate item">{winRate}%</div>
      <div className="wins item">{wins}</div>
      <div className="losses item">{losses}</div>
    </>
  );
};
// home props는 home 화면에서만 따로 스타일을 적용 시키기 위한 속성 값
const RankingBoard = ({ home, tier }) => {
  // 랭크 리스트
  const [rankList, setRankList] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [postsPerPage] = useState(20); // 페이지 당 20개

  useEffect(() => {
    // 다이아~아이언 티어 api와 챌~마스터 api가 달라서 분기 처리
    const tierGroup = ["challenger", "grandmaster", "master"];
    const fetchRankList = () => {
      if (tierGroup.includes(tier)) {
        getTopTierRanking(tier).then((ranking) => setRankList(ranking.data.rankList));
      } else {
        getDownTierRanking(tier).then((ranking) => setRankList(ranking.data.rankList));
      }
    };

    fetchRankList();
  }, [tier]);

  const indexOfLastSummoner = currentPage * postsPerPage; // 페이지에서 마지막 소환사 인덱스 번호
  const indexOfFirstSummoner = indexOfLastSummoner - postsPerPage; // 페이지에서 첫 소환사 인덱스 번호
  const currentSummoners = rankList.slice(indexOfFirstSummoner, indexOfLastSummoner);
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <RankingContainer>
        <div className="rank menu">순위</div>
        <div className="summoner menu">소환사</div>
        <div className="tier menu">티어</div>
        <div className="menu">LP</div>
        <div className="winRate menu">승률</div>
        <div className="wins menu">승</div>
        <div className="losses menu">패</div>
        {/* 경로가 home이면  10명만, 더보기 버튼 렌더링*/}
        {home ? (
          <HomeRank rankList={rankList.slice(0, 10)} />
        ) : rankList.length !== 0 ? (
          currentSummoners.map((rank, i) => <RankItem rankInfo={rank} tier={tier} rankNum={i + indexOfFirstSummoner} key={i} />)
        ) : (
              <div className="empty">
                시즌 초기에는 전적 결과가 없을 수 있습니다.
                <br />
            하위 티어를 검색하세요.
              </div>
            )}
      </RankingContainer>
      <Pagination tier={tier} postsPerPage={postsPerPage} totalSummonerCount={rankList.length} paginate={paginate} />
    </>
  );
};

// 홈 화면에서 보여지는 챌린져 10명 랭크 리스트
const HomeRank = ({ rankList }) => {
  return (
    <>
      {rankList.length !== 0 ? (
        rankList.map((rank, i) => <RankItem rankInfo={rank} rankNum={i} key={i} />)
      ) : (
          <div className="empty">
            <p>시즌 초기에는 랭킹 결과가 없을 수 있습니다.</p>
            <p>더보기를 눌러주세요.</p>
          </div>
        )}
      <div className="more">
        <Link to="/ranking?tier=challenger">더 보기</Link>
      </div>
    </>
  );
};

export default RankingBoard;

const RankingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.2fr 1fr 0.8fr;
  width: 100%;
  margin-top: 10px;
  background-color: #ffffff;

  a:hover {
    color: inherit;
  }

  .menu {
    text-align: center;
    font-weight: 400px;
    padding: 0.7em;
    color: #fff;
    background-color: #363944;
    font-size: 14px;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 1em;
    border: none;
    border-bottom: 1px solid lightgrey;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    img {
      width: 26px;
      height: 26px;
      padding-right: 5px;
    }
  }

  .item.lp {
    background-color: #f6f6f6;
  }

  .wins,
  .losses {
    display: none;
  }

  .more {
    grid-column: 1 / 6;
    font-size: 1rem;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid lightgrey;

    a {
      text-decoration: none;
    }
    a:hover {
      font-weight: 800;
    }
  }
  /* 전적 없음 */
  .empty {
    grid-column: 1 / 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: 1.5;
    height: 20vh;
    font-size: 1em;
    font-weight: 800;

  }

  @media (min-width: 576px) {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    .menu,
    .itme {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.8fr 2fr 1fr 1fr 1fr 0.8fr 0.8fr;

    .more {
      grid-column: 1 / 8;
    }

    .wins,
    .losses {
      display: grid;
    }
  }
`;
