import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getSummonerInfo, getMatchList, getMatchInfo, getSummonerLeagueInfo } from '../../api/api';
import Header from '../../components/Header';

import SummonerProfile from './Profile/SummonerProfile';
import ProfileMenu from './Profile/ProfileMenu';

const Summoner = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [summonerInfo, setSummonerInfo] = useState('');
    const [summonerleagueInfo, setSummonerLeagueInfo] = useState('');
    const [matchInfo, setMatchInfo] = useState('');

    useEffect(() => {
        setLoading(true);
        const { summonerName } = match.params;

        // 각 match의 정보 검색
        getSummonerInfo(summonerName).then(async res => {
            const { id, accountId, puuid, summonerLevel, profileIconId, revisionDate, name } = res.data;
        
            Promise.all([
                getMatchInfo(puuid), getSummonerLeagueInfo(id)
            ]).then(([fetchMatchInfo, fetchLeagueInfo]) => {
                setMatchInfo(fetchMatchInfo.data.matchInfo);
                setSummonerLeagueInfo(fetchLeagueInfo.data.leagueInfo[0]);
                setLoading(false);
                setSummonerInfo({
                    name,
                    profileIconId,
                    revisionDate,
                    summonerLevel
                });
            })
        })

    }, [match.params]);

    // console.log(summonerleagueInfo);
    // console.log(matchInfo);
    // console.log(summonerInfo)

    // if(loading){
    //     console.log(loading)
    //     return (
    //         <>
    //             loading...
    //         </>
    //     )
    // }

    return (
        <>
            <Header />
            <Container>
                <SummonerProfileContainer>
                    <SummonerProfile summonerInfo={summonerInfo}/>
                    <ProfileMenu summonerInfo={summonerInfo}/>
                </SummonerProfileContainer>
                
            </Container>
        </>
    );
};

export default Summoner;

const Container = styled.div`
    margin-top: 100px;
`
const SummonerProfileContainer = styled.div`
    /* display: flex; */
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    /* 배경 이미지 */
    background: #a0a0a0;
    background-image: url("/bg-image5.png");
    background-repeat: no-repeat;
    background-size: cover;

    /* 모바일 우선 - min-width px 이상에서 적용 */
    @media (min-width: 576px){
        max-width: 540px;
    }
    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 992px){
        max-width: 960px;
    }
    @media (min-width: 1200px){
        max-width: 1140px;
    }
`;


