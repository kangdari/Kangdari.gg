import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import Videos from "../components/Videos";
import RankingBoard from "../components/RankingBoard";

const Home = () => {
  return (
    <HomeBlock>
      <Helmet>
        <title>Kangdari.gg - TFT 전적 검색</title>
        <meta name="title" content="Kangdari.gg - TFT 전적 검색" />
        <meta name="description" content="tft 전적 검색, 순위표" />
      </Helmet>
      <Header />
      <Videos />
      <RankingBoard home tier={"challenger"} />
    </HomeBlock>
  );
};

export default Home;

const HomeBlock = styled.div``;
