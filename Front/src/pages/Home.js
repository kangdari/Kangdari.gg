import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Videos from "../components/Videos";
import RankingBoard from "../components/RankingBoard";

const Home = () => {
  return (
    <HomeBlock>
      <Header />
      <Videos />
      <RankingBoard home tier={"challenger"} />
    </HomeBlock>
  );
};

export default Home;

const HomeBlock = styled.div``;
