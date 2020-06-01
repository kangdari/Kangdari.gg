import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Videos from '../components/Videos';

const Home = () => {
    return (
        <HomeBlock>
            <Header />
            {/* 검색 결과 창 */}
            <Videos />
        </HomeBlock>
    );
};

export default Home;

const HomeBlock = styled.div`

`
