import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// const ParticipantItem = ({ name }) => {
//     return(
//         <ParticipantBox>
//             <div className="avatar_box">
//                 <img src="/avatar/avatar.png" alt="participant__avatar_img" />
//             </div>
//             {/* to 설정 */}
            
//             <Link className="nameLink" to={`/summoner/${name}`}>{name}</Link>
//         </ParticipantBox>
//     )
// }

const Participants = ({ participants }) => {

    return (
        <ParticipantsContainer>
            {/* 8명 반복 */}
            {/* { participants.map((participant, i) => <ParticipantItem participant={participant} name={participantsNameArr[i]} key={i}/>)} */}
        </ParticipantsContainer>
    );

};

export default Participants;

const ParticipantsContainer = styled.div`
    display: none;

    @media (min-width: 1200px){
        display: block;
        width: 300px;
        display: flex;
        flex-wrap: wrap;
    }

`;

const ParticipantBox = styled.div`
    display: flex;
    width: 150px;
    padding-right: 4px;
    margin: 3px 0;
    /* overflow: hidden; */

    .avatar_box{
        border-radius: 50%;
        overflow: hidden;
        width: 16px;
        height: 16px;


        img{
            max-height: 18px;
            margin-left: -5px;
        }
    }

    .nameLink{
        text-decoration: none;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 5px;
        color: #444;
        word-break: break-all;
        font-size: 12px;

        &:hover{
            color: #888;
        }               
    }

`;

