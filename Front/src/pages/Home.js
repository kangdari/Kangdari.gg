import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Videos from '../components/Videos';
import Ranking from '../components/Ranking';

const Home = () => {
    return (
        <HomeBlock>
            <Header />
            <Videos />
            <Ranking home tier={'challenger'}/>
        </HomeBlock>
    );
};

export default Home;

const HomeBlock = styled.div`

`
