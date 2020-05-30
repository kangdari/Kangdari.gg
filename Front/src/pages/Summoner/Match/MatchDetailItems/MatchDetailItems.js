import React from 'react';
import styled from 'styled-components';
import { getGameTime, getRound } from '../../../../common/gameUtil';


const MatchDetailItem = ({ participant }) => {

    // useEffect 이름 가져오기, set loading 설정

    const { gold_left, placement, level, last_round, time_eliminated, traits, units } = participant;
    const { minute, second } = getGameTime(time_eliminated);
    // 라운드 구하기
    const {r, remain } = getRound(last_round);

    return(
        <tbody>
            <tr>
                <td className="placement">{placement}</td>
                <td className="summoner">1</td>
                <td className="level">{level}</td>
                <td className="round">{r}-{remain}</td>
                <td className="time_eliminated">{minute}:{second}</td>
                <td className="traits">1</td>
                <td className="units">1</td>
                <td className="gold_left">{gold_left}</td>
            </tr>
        </tbody>
    )
}

const MatchDetailItems = ({ participants }) => {
    // 순위 오름차순으로 정렬 
    participants.sort((a,b) => a.placement - b.placement);
    
    return (
        <MatchDetailContainer>
            <table>
                <thead>
                    <tr>
                        <th>등수</th>
                        <th>소환사</th>
                        <th>레벨</th>
                        <th>라운드</th>
                        <th>생존시간</th>
                        <th>시너지</th>
                        <th>챔피언</th>
                        <th>잔여골드</th>
                    </tr>
                </thead>
                {participants.map((participant, i) => <MatchDetailItem participant={participant} key={i}/>)}
            </table>
        </MatchDetailContainer>
    );
};

export default MatchDetailItems;

const MatchDetailContainer = styled.div`
    display: block;
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 12px;

    table{
        width: 100%;
        position: relative;
        min-width: 960px;

        th{
            height: 32px;
            background-color: #e6e6e6;
            color: #646464;
            text-align: center;
            font-size: 12px;
            font-weight: 400;
            padding: 10px 0;
        }
        td{
            height: 44px;
            padding : 15px 0;
        }

        .placement{
            width: 40px;
        }
        .summoner{
            width: auto;
        }
        .level{
            width: 40px;
        }
        .round{
            width: 60px;
        }
        .time_eliminated{
            width: 60px;
        }
        .traits{
            width: 200px;
        }
        .units{
            width: 330px;
        }
        .gold_left{
            width: 75px;
        }

        .placement, .level, .round, .time_eliminated{
            text-align: center;
            @media (min-width: 992px){
                width: 75px
            }
        }
    }
`;
