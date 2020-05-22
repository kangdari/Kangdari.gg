import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const LeagueInfo = ({summonerleagueInfo}) => {

    const { tier, rank, leaguePoints, wins, losses, summonerName } = summonerleagueInfo;

    // const width = 
    // console.log(leaguePoints/100*100)
    // console.log(parseInt(leaguePoints/100))

    // http://kangdari.gg.s3.ap-northeast-2.amazonaws.com/emblems/Emblem_Bronze.png

    const url = `http://kangdari.gg.s3.ap-northeast-2.amazonaws.com/emblems/${tier}.png`

    return (
        <LeagueInfoContainer>
            <Row>
                <Col xl={4}>
                    <TierBox>
                        <TierInfo>
                            {/* unranked 이미지 추가 */}
                            <TierIconBox>
                                <TierIcon src={url} />  
                            </TierIconBox>
                            <TierSummary tier={tier}>
                                <div>티어</div>
                                <span className="rank">{tier} {rank}</span>
                                {leaguePoints ? (
                                    <span className="points">{leaguePoints} LP</span>
                                ): ''}
                                <TierGraph>
                                    <TierInnerGraph tier={tier} width={`${leaguePoints >= 100 ? 100 : leaguePoints}%`}></TierInnerGraph>
                                </TierGraph>
                            </TierSummary>
   
                        </TierInfo>
                        <TierStats></TierStats>
                    </TierBox>
                </Col>
                <Col xl={8}></Col>
            </Row>
        </LeagueInfoContainer>
    );
};

export default LeagueInfo;

const LeagueInfoContainer = styled(Container)`
    margin-top: 50px;
`;

const TierBox = styled.div`

`;

const TierInfo = styled.div`
    display: flex;
    padding: 20px 5px 21px 15px;
`;

const TierIconBox = styled.div`
    padding: 4px 12px;

    img{
        width: 64px;
    }

    @media (min-width: 768px){
        img{
            width: 84px;
        }
    }
`

const TierIcon = styled.img`
    width: 64px;

    @media (min-width: 768px){
        width: 84px;
    }
`;

const TierSummary = styled.div`
    padding-top: 12px;

    div{
        color: #646464;
        font-size: 12px;
        padding-bottom: 5px;
    }

    .rank{
        font-size: 16px;
        font-weight: 700;
        color: ${props => props.tier ? props.theme.tierColor[props.tier] : '#000000'}        

    }
    .points{
        margin-left: 10px;
        float: right;
    }
`;

const TierGraph = styled.div`
    width: 150px;
    height:4px;
    background: #d6d6d6;
    margin: 4px 0;
    position: relative;
    border-radius: 3px;
`

// 여러번 사용
const TierInnerGraph = styled.div`  
    height: 4px;
    background: ${props => props.tier ? props.theme.tierColor[props.tier] : '#363944'};
    width : ${props => props.width };
    
`

const TierStats = styled.div`

`;


