import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <HomeBlock>
            Home
        </HomeBlock>
    );
};

const HomeBlock = styled.div`
  color: ${props => props.theme.blueColor}
`

export default Home;