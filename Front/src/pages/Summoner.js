import React, { useEffect, useState } from 'react';

import { getSummonerInfo, getMatchList, getMatchInfo, getSummonerLeagueInfo } from '../api/api';
import Header from '../components/Header';

const Summoner = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [summonerleagueInfo, setSummonerLeagueInfo] = useState('');
    const [matchInfo, setMatchInfo] = useState('');

    useEffect(() => {
        setLoading(true);
        const { summonerName } = match.params;
        // encodeURI(summonerName)

        // 각 match의 정보 검색
        getSummonerInfo(summonerName).then(async res => {
            const { id, accountId, puuid, summonerLevel, profileIconId } = res.data;

            Promise.all([
                getMatchInfo(puuid), getSummonerLeagueInfo(id)
            ]).then(([res, res2]) => {
                setMatchInfo(res.data.matchInfo);
                setSummonerLeagueInfo(res2.data.leagueInfo[0]);
                setLoading(false);
            })
        })

    }, [match.params]);

    console.log(summonerleagueInfo);
    console.log(matchInfo);

    if(loading){
        console.log(loading)
        return (
            <>
                loading...
            </>
        )
    }

    return (
        <>
            <Header />
        </>
    );
};

export default Summoner;