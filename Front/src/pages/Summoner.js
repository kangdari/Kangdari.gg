import React, { useEffect } from 'react';


import { getSummonerInfo } from '../api/api';
import Header from '../components/Header';

const Summoner = ({ match }) => {

    useEffect(() => {
        const { summonerName } = match.params;

        getSummonerInfo(summonerName).then(res => {
            const { id, accountId, puuid, summonerLevel } = res.data; 
            console.log(puuid);
            // 소환사 정보 가져오기 완료

            // 다른 api 호출
        })
    }, [match.params]);


    return (
        <>
            <Header />
        </>
    );
};

export default Summoner;