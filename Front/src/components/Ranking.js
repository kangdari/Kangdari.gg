import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getRanking } from '../api/api';

const RankItem = ({ rankInfo, rankNum }) => {
    const { summonerName, leaguePoints, wins, losses} = rankInfo;
    return(
        <>
            <div className="rankNum item">{rankNum+1}</div>
            {/* <div className="name item">{summonerName}</div> */}
            <div className="name item">
                <Link to={`/summoner/${summonerName}`}>{summonerName}</Link>
            </div>
            <div className="tier item">
                <img src='//d287nhi7bqyj2m.cloudfront.net/emblems/CHALLENGER.png' alt="tierImg"/>
                Challenger
            </div>
            <div className="lp item">{leaguePoints}LP</div>
            <div className="winRate item">43%</div>
            <div className="wins item">{wins}</div>
            <div className="losses item">{losses}</div>
        </>
    )
}

const Ranking = () => {
    // 챌린저 랭크 리스트
    const [rankList, setRankList] = useState([]);

    useEffect(() => {
        getRanking().then(ranking => setRankList(ranking.data.rankList));
    }, [])

    if(!rankList){
        return(
            <div>loading...</div>
        )
    }

    if(rankList){
        return (
            <RankingContainer>
                <div className="rank menu">순위</div>
                <div className="summoner menu">소환사</div>
                <div className="tier menu">티어</div>
                <div className="menu">LP</div>
                <div className="winRate menu">승률</div>
                <div className="wins menu">승</div>
                <div className="losses menu">패</div>
                {rankList.map((rank, i) => <RankItem rankInfo={rank} rankNum={i} key={i}/>)}
            </RankingContainer>
        );    
    }
};

export default Ranking;

const RankingContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.2fr 1.2fr 1fr 0.8fr;
    width: 100%;
    margin-top: 10px;
    background-color: #ffffff;

    a:hover{
        color: inherit;
    }

    .menu{
        text-align: center;
        font-weight: 400px;
        padding: 0.7em;
        color: #fff;
        background-color: #363944;
        font-size: 14px;
    }
    
    .item{
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

        img{
            width: 26px;
            height: 26px;
            padding-right: 5px;
        }
    }

    .item.lp{
        background-color: #f6f6f6;
    }

    .wins, .losses{
        display:none;
    }
    @media (min-width: 576px){
        width: 85vw;
        margin-left: auto;
        margin-right: auto;
        .menu, .itme{
            font-size: 1rem;
        }
    }

    @media (min-width: 768px){
        grid-template-columns: 0.8fr 2fr 1fr 1fr 1fr 0.8fr 0.8fr;
        
        .wins, .losses{
            display: grid;
        }
    }


`;