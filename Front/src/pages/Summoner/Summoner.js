import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

import { getSummonerInfo, getMatchList, getMatchInfo, getSummonerLeagueInfo } from '../../api/api';
import Header from '../../components/Header';

import SummonerProfile from './Profile/SummonerProfile';
import ProfileMenu from './Profile/ProfileMenu';

const Summoner = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [summonerInfo, setSummonerInfo] = useState(''); // 소환사 정보( 이름, 아이콘ID, 레벨 )
    const [summonerleagueInfo, setSummonerLeagueInfo] = useState(''); // TFT 리그, 티어 정보
    const [matchInfo, setMatchInfo] = useState(''); // TFT 전적 정보

    useEffect(() => {
        setLoading(true);
        const { summonerName } = match.params;

        // 각 match의 정보 검색
        getSummonerInfo(summonerName).then(async res => {
            const { id, accountId, puuid, summonerLevel, profileIconId, revisionDate, name } = res.data;

            if(!puuid){
                setSummonerInfo('');
                setLoading(false);
            }
            else if(puuid){
                Promise.all([
                    getMatchInfo(puuid), getSummonerLeagueInfo(id)
                ]).then(([fetchMatchInfo, fetchLeagueInfo]) => {
                    setMatchInfo(fetchMatchInfo.data.matchInfo);
                    setSummonerLeagueInfo(fetchLeagueInfo.data.leagueInfo[0]);
                    setSummonerInfo({
                        name,
                        profileIconId,
                        revisionDate,
                        summonerLevel
                    });
                    setLoading(false);
                })
            }
        })

    }, [match.params]);

    if(loading){
        return(
            <>
                <Header />
                <LoadingBox>
                    <CircularProgress color="black"/>
                </LoadingBox>
            </>
        )
    }

    return (
        <>
            <Header />
            <Container>
                {
                    summonerInfo ? (
                        <SummonerProfileContainer>
                            <SummonerProfile summonerInfo={summonerInfo}/>
                            <ProfileMenu summonerInfo={summonerInfo} summonerleagueInfo={summonerleagueInfo}/>
                        </SummonerProfileContainer>
                    ) : (
                        <SearchNotFound>
                            <img src="/404.jpg"/>
                            <SearchNotFoundText>검색 결과가 없습니다.</SearchNotFoundText>
                        </SearchNotFound>
                    )
                }
            </Container>
        </>
    );
};

export default Summoner;

const Container = styled.div`
    margin-top: 100px;

    margin-right: auto;
    margin-left: auto;

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
`
const SummonerProfileContainer = styled.div`
    /* display: flex; */
    width: 100%;
    /* 배경 이미지 */
    background: #a0a0a0;
    background-image: url("/bg-image5.png");
    background-repeat: no-repeat;
    background-size: cover;
`;

const SearchNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        object-fit: cover;
    }
`;

const SearchNotFoundText = styled.div`
    margin-top: 30px;
    font-size: 48px;
    font-weight: 700;
`;

const LoadingBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;