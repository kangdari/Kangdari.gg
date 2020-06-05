import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getTopTierRanking, getDownTierRanking } from '../api/api';

const RankItem = ({ rankInfo, rankNum, tier }) => {
    const { summonerName, leaguePoints, wins, losses, rank} = rankInfo;
    const winRate =  (wins/(wins + losses)*100).toFixed(1);

    if(!tier){
        return(
            <>
                <div className="rankNum item">{rankNum+1}</div>
                {/* <div className="name item">{summonerName}</div> */}
                <div className="name item">
                    <Link to={`/summoner/${summonerName}`}>{summonerName}</Link>
                </div>
                <div className="tier item">
                    <img src={`//d287nhi7bqyj2m.cloudfront.net/emblems/CHALLENGER.png`} alt="tierImg"/>
                    challenger
                </div>
                <div className="lp item">{leaguePoints}LP</div>
                <div className="winRate item">{winRate}%</div>
                <div className="wins item">{wins}</div>
                <div className="losses item">{losses}</div>
            </>
        )    
    }

    return(
        <>
            <div className="rankNum item">{rankNum+1}</div>
            {/* <div className="name item">{summonerName}</div> */}
            <div className="name item">
                <Link to={`/summoner/${summonerName}`}>{summonerName}</Link>
            </div>
            <div className="tier item">
                <img src={`//d287nhi7bqyj2m.cloudfront.net/emblems/${tier.toUpperCase()}.png`} alt="tierImg"/>
                {tier} {rank}
            </div>
            <div className="lp item">{leaguePoints}LP</div>
            <div className="winRate item">{winRate}%</div>
            <div className="wins item">{wins}</div>
            <div className="losses item">{losses}</div>
        </>
    )    
}
// home props는 home 화면에서만 따로 스타일을 적용 시키기 위한 속성 값
const Ranking = ({ home, tier }) => {
    // 챌린저 랭크 리스트
    const [rankList, setRankList] = useState([]);

    useEffect(() => {
        // 다이아~아이언 티어 api와 챌~마스터 api가 달라서 분기 처리
        const tierGroup = ['challenger', 'grandmaster','master'];
        if(tierGroup.includes(tier)){
            getTopTierRanking(tier).then(ranking => setRankList(ranking.data.rankList));
        }else{
            getDownTierRanking(tier).then(ranking => setRankList(ranking.data.rankList));
        }
    }, [tier])


    return (
        <RankingContainer>
            <div className="rank menu">순위</div>
            <div className="summoner menu">소환사</div>
            <div className="tier menu">티어</div>
            <div className="menu">LP</div>
            <div className="winRate menu">승률</div>
            <div className="wins menu">승</div>
            <div className="losses menu">패</div>
            {/* 경로가 home이면  10명만, 더보기 버튼 렌더링*/}
            {home ? 
                <HomeRank rankList={rankList.slice(0,10)}/>
                :  rankList.map((rank, i) => <RankItem rankInfo={rank} tier={tier} rankNum={i} key={i}/> 
            )}
        </RankingContainer>
    );    
    
};

const HomeRank = ({ rankList }) => {
    return (
        <>
            {rankList.map((rank, i) => <RankItem rankInfo={rank} rankNum={i} key={i}/>)}
            <div className="more">
                <Link to='/ranking?tier=challenger'>더 보기</Link>
            </div>
        </>
    )
}

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

    .wins, 
    .losses{
        display:none;
    }

    .more{
        grid-column: 1 / 6;
        font-size: 1rem;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 576px) { 
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        .menu,
        .itme{
            font-size: 1rem;
        }
    }

    @media (min-width: 768px){
        grid-template-columns: 0.8fr 2fr 1fr 1fr 1fr 0.8fr 0.8fr;

        .more{
            grid-column: 1 / 8;
        }
        
        .wins, .losses{
            display: grid;
        }
    }


`;