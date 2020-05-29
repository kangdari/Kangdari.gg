import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

// 
import RecentGames from './RecentGames';

const LeagueInfo = ({summonerleagueInfo, averageRank, Awins, Atops, rankArr}) => {
    const { tier, rank, leaguePoints, wins, losses } = summonerleagueInfo;
    const totalMatch = wins + losses;
    const winRate = totalMatch ? (wins/totalMatch*100).toFixed(1) : 0;

    const url = `http://kangdari.gg.s3.ap-northeast-2.amazonaws.com/emblems/${tier}.png`

    return (
        <LeagueInfoContainer>
            <Row>
                <Col xl={4}>
                    <TierBox>
                        <TierInfo>
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
                        <TierStats>
                                <Row>
                                    <Col xs={6} className="stat">
                                        <span>승리</span>
                                        <span>{wins}</span>
                                    </Col>
                                    <Col xs={6} className="stat">
                                        <span>승률</span>
                                        {winRate ? (
                                            <span>{winRate}%</span>   
                                        ) : 0 }
                                    </Col>
                                    <Col xs={6} className="stat">
                                        <span>게임 수</span>
                                        <span>{totalMatch}</span>
                                    </Col>
                                    <Col xs={6} className="stat">
                                        <span>평균 등수(api 수정 필요)</span>
                                        <span># {averageRank}</span>
                                    </Col>

                                </Row>
                            </TierStats>
                    </TierBox>
                </Col>
                <Col xl={8}>
                    그래프...
                </Col>
            </Row>
            {/* ex) 인천 검색 시 tft 전적이 없음  */}
            { rankArr.length !== 0 ? <RecentGames Awins={Awins} Atops={Atops} rankArr={rankArr}/> : '' } 
        </LeagueInfoContainer>
    );
};

export default LeagueInfo;

const LeagueInfoContainer = styled(Container)`
    margin-top: 50px;
    padding: 0;
`;

const TierBox = styled.div`
    border: 1px solid #e6e6e6;
`;

const TierInfo = styled.div`
    display: flex;
    padding: 20px 5px 21px 15px;
`;

const TierIconBox = styled.div`
    padding: 4px 12px;
    margin-right: 16px;

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

const TierInnerGraph = styled.div`  
    height: 4px;
    background: ${props => props.tier ? props.theme.tierColor[props.tier] : '#363944'};
    width : ${props => props.width };
    
`

const TierStats = styled.div`
    padding: 0 20px 5px 20px;

    .stat{
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;

        span:nth-child(1){
            font-size: 11px;
        }
        span:nth-child(2){
            font-size: 16px;
        }
    }

`;


