import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import qs from "qs";

import Header from "../../components/Header";
import RankingBoard from "../../components/RankingBoard";

const RankMenu = () => {
  return (
    <RankMenuContainer>
      <Tier to="/ranking?tier=challenger">챌린저</Tier>
      <Tier to="/ranking?tier=grandmaster">그랜드마스터</Tier>
      <Tier to="/ranking?tier=master">마스터</Tier>
      <Tier to="/ranking?tier=DIAMOND">다이아몬드</Tier>
      <Tier to="/ranking?tier=PLATINUM">플래티넘</Tier>
      <Tier to="/ranking?tier=GOLD">골드</Tier>
      <Tier to="/ranking?tier=SILVER">실버</Tier>
      <Tier to="/ranking?tier=BRONZE">브론즈</Tier>
      <Tier to="/ranking?tier=IRON">아이언</Tier>
    </RankMenuContainer>
  );
};

const Ranking = ({ location }) => {
  const { tier } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <>
      <Helmet>
        <title>티어 랭킹 순위표 - KR</title>
        <meta name="title" content={`${tier} 랭킹 순위표 - KR`} />
        <meta name="description" content="tft 전적 검색, 순위표" />
      </Helmet>

      <Header />
      <RankMenu />
      {/* tier props를 전달 */}
      <RankingBoard tier={tier} />
    </>
  );
};

export default Ranking;

const RankMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin-top: 10px;

  @media (min-width: 576px) {
    width: 75vw;
    margin: 10px auto 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

const Tier = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  font-size: 14px;
  border: 1px solid lightgrey;
  background: #fff;
`;
