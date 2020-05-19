import React, { useEffect, useState } from 'react';

import { getSummonerInfo, getMatchList, getMatch } from '../api/api';
import Header from '../components/Header';

const Summoner = ({ match }) => {
    // const [loading, setLoading] = useState('');
    const [summonerInfo, setSummonerInfo] = useState('');
    const [matchList, setMatchList] = useState('');
    // const [matchInfo, setMatchInfo] = useState('');

    useEffect(() => {
        const { summonerName } = match.params;

        // getSummonerInfo(summonerName).then(async res => {
        //     // 소환사 정보 가져오기 완료
        //     if(res.data){
        //         const { id, accountId, puuid, summonerLevel } = res.data;
        //         getMatchList(puuid)
        //             .then(res => res.data.matchList)
        //             .then(matchList => setMatchList(matchList))
        //     }
        //     setSummonerInfo(res.data);
        // })

        getSummonerInfo(summonerName)
            .then(async res => res.data.puuid)
            .then(puuid => getMatchList(puuid))
            .then(res => res.data.matchList)
            .then(matchList => {
                matchList.forEach(async match_id => {
                    const res = await getMatch(match_id) // 매치 상세 정보 받기
                    console.log(res.data.info)   
                });
            })

    }, [match.params]);

    return (
        <>
            <Header />
        </>
    );
};

export default Summoner;