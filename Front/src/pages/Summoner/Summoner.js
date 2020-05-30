import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

import { getSummonerInfo, getMatchInfo, getSummonerLeagueInfo } from '../../api/api';
import Header from '../../components/Header';

import SummonerProfile from './Profile/SummonerProfile';
import ProfileMenu from './Profile/ProfileMenu';
import LeagueInfo from './LeagueInfo/LeagueInfo';
import MatchInfo from './Match/MatchInfo';

const Summoner = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [summonerInfo, setSummonerInfo] = useState(''); // 소환사 정보( 이름, 아이콘ID, 레벨 )
    const [summonerleagueInfo, setSummonerLeagueInfo] = useState([]); // TFT 리그, 티어 정보
    // const [averageRank, setAverageRank] = useState(0);
    const [matchInfo, setMatchInfo] = useState(''); // TFT 전적 정보

    // 20게임 평균 
    const [wins, setWins] = useState(0); // wins, top 수 
    const [tops, setTops] = useState(0); // wins, top 수 
    const [rankArr, setRankArr] = useState([]); // 검색한 match 수 등수 배열

    useEffect(() => {
        setLoading(true);
        const { summonerName } = match.params;

        // 각 match의 정보 검색
        getSummonerInfo(summonerName).then(async res => {
            const { id, puuid, summonerLevel, profileIconId, revisionDate, name } = res.data;
            if(!puuid){
                setSummonerInfo('');
                setLoading(false);
            }
            else if(puuid){
                Promise.all([
                    getMatchInfo(puuid), getSummonerLeagueInfo(id),
                ]).then(([fetchMatchInfo, fetchLeagueInfo, fetchAverageRank]) => {
                    setMatchInfo(fetchMatchInfo.data.matchInfo.matchInfo);
                    setTops(fetchMatchInfo.data.matchInfo.tops);
                    setWins(fetchMatchInfo.data.matchInfo.wins);
                    setRankArr(fetchMatchInfo.data.matchInfo.rankArr);

                    setSummonerLeagueInfo(fetchLeagueInfo.data.leagueInfo[0]);
                    // setAverageRank(fetchAverageRank.data.averageRank);
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
                    <CircularProgress />
                </LoadingBox>
            </>
        )
    }

    return (
        <>
            <Header />
            <Container>
                {/* Summoner 검색 결과 */}
                {
                    summonerInfo ? (
                        <>
                            <SummonerProfileContainer>
                                <SummonerProfile summonerInfo={summonerInfo}/>
                                <ProfileMenu summonerInfo={summonerInfo} summonerleagueInfo={summonerleagueInfo}/>
                            </SummonerProfileContainer>
                            <LeagueInfo summonerleagueInfo={summonerleagueInfo} Awins={wins} Atops={tops} rankArr={rankArr}/> 
                            { matchInfo.length !== 0 ? <MatchInfo matchInfo={matchInfo} /> : ''}
                        </>
                    ) : (
                        <SearchNotFound>
                            <img src="/404.jpg" alt="404_img" />
                            <SearchNotFoundText>검색 결과가 없습니다.</SearchNotFoundText>
                        </SearchNotFound>
                    )
                }

            </Container>
        </>
    );

    // design test 용 
    // return (
    //     <>
    //         <Header />
    //         <Container>
    //             {/* 축약판 */}
    //             <MatchDetailItem>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th>등수</th>
    //                             <th>소환사</th>
    //                             <th>레벨</th>
    //                             <th>라운드</th>
    //                             <th>생존시간</th>
    //                             <th>시너지</th>
    //                             <th>챔피언</th>
    //                             <th>잔여골드</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <tr>
    //                             <td className="placement">1</td>
    //                             <td className="summoner">1</td>
    //                             <td className="level">1</td>
    //                             <td className="round">1</td>
    //                             <td className="time_eliminated">1</td>
    //                             <td className="traits">1</td>
    //                             <td className="units">1</td>
    //                             <td className="gold_left">1</td>
    //                         </tr>
    //                         <tr>
    //                             <td className="placement">1</td>
    //                             <td className="summoner">1</td>
    //                             <td className="level">1</td>
    //                             <td className="round">1</td>
    //                             <td className="time_eliminated">1</td>
    //                             <td className="traits">1</td>
    //                             <td className="units">1</td>
    //                             <td className="gold_left">1</td>
    //                         </tr>

    //                     </tbody>
    //                 </table>
    //             </MatchDetailItem>
    //         </Container>
    //     </>
    // )

};

export default Summoner;

// const MatchDetailItem = styled.div`
//     display: block;
//     overflow-x: auto;
//     overflow-y: hidden;

//     table{
//         width: 100%;
//         position: relative;
//         min-width: 960px;

//         th{
//             height: 32px;
//             background-color: #e6e6e6;
//             color: #646464;
//             text-align: center;
//             font-size: 12px;
//             font-weight: 400;
//             padding: 10px 0;
//         }
//         td{
//             height: 44px;
//             padding : 15px 0;
//         }

//         .placement{
//             width: 40px;
//         }
//         .summoner{
//             width: auto;
//         }
//         .level{
//             width: 40px;
//         }
//         .round{
//             width: 60px;
//         }
//         .time_eliminated{
//             width: 60px;
//         }
//         .traits{
//             width: 200px;
//         }
//         .units{
//             width: 330px;
//         }
//         .gold_left{
//             width: 75px;
//         }

//         .placement, .level, .round, .time_eliminated{
//             text-align: center;
//             @media (min-width: 992px){
//                 width: 75px
//             }
//         }
//     }
// `;

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