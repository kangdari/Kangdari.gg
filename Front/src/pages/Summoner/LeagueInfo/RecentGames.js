import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Graph from './Graph';

const Rank = ({ranking}) => {

    return(
        <Box ranking={ranking}>{ranking}</Box>
    )
}

const RecentGames = ({ Awins, Atops, rankArr}) => {
    // 평균 등수
    const averageRank = rankArr.reduce((acc, cur) => acc + cur)/rankArr.length;

    useEffect(()=>{

    })

    return (
        <RecentGamesContainer> 
            <TitleBox>최근 20 게임 등수</TitleBox>
            <Row>
                <SummaryBox xl={4}>
                    <AverageBox>
                        <div className="rank">
                            <Tag>평균 등수</Tag>
                            <Text>#{averageRank.toFixed(1)}</Text>
                        </div>
                        <div className="wins">
                            <Tag>1등 횟수</Tag>
                            <Text>{Awins}</Text>
                        </div>
                        <div className="top">
                            <Tag>TOP 횟수</Tag>
                            <Text>{Atops}</Text>
                        </div>
                    </AverageBox>

                    <RankBox>
                        {
                            rankArr.map((ranking, i) => <Rank key={i} ranking={ranking}/>)
                        }
                    </RankBox>
                </SummaryBox>
                <GraphBox xl={8}>
                    <Graph rankArr={rankArr}/>
                </GraphBox>
            </Row>
        </RecentGamesContainer>
    );
};

export default RecentGames;

const RecentGamesContainer = styled.div`
    width: 100%;
    border: 1px solid #e6e6e6;
    margin-top: 8px;
`;

const TitleBox = styled.div`
    padding-left: 16px;
    font-size: 14px;
    color: #000000;
    height: 45px;
    line-height: 45px;
    font-weight: 400;
    border-bottom: 1px solid #e6e6e6;
`;

const SummaryBox = styled(Col)`
    display: flex; 
    flex-direction: column;
    align-items: center;


    @media (min-width: 992px){
        flex-direction: row;
    }
    @media (min-width: 1200px){
        flex-direction: column;
    }
`;

const AverageBox = styled.div`
    display: flex;
    width: 360px;
    justify-content: space-around;
    text-align:center;
    margin-top: 16px;
`;

const RankBox = styled.ul`
    margin-top: 16px;
    width: 360px;
    @media (min-width: 992px){
        margin: 16px 0 0 16px;
    }
    @media (min-width: 1200px){
        margin: 10px 0 16px 16px;
    }
`;

const Box = styled.li`
    width: 32px;
    height: 32px;
    margin: 2px;
    float: left;
    text-align: center;
    line-height: 32px;
    border-radius: 4px;
    color : #fff;
    background: ${props => props.theme.rankColor[props.ranking-1]};
`;

const Tag  = styled.div`
    font-size: 12px;
    color: grey;
    margin: 10px 0;
    font-weight: 400;
`;
const Text = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const GraphBox = styled(Col)`
    height: 165px;
    margin-top: 15px;
`;