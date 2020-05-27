import React from "react";
import styled from 'styled-components';

import Traits from './Traits';
import Units from './Units';

const MatchHistoryItems = () => {

  return (
    <MatchHistoryItemsBox>
      <MatchHistoryItem>
        <Summary>
          <div className="rank">#1</div>
          <div className="game_mode">랭크</div>
          <div className="length">16:00</div>
          <div className="date">2일전</div>
          <div className="variation">니코의 세계</div>
        </Summary>
       
        {/* img url, level props로 받아옴 */}
        <Avatar>
          <span className="level">4</span>
          <div className="avatar_box">

            <img src="/avatar/avatar.png" alt="img" />
          </div>
        </Avatar>

        {/* 시너지 목록 props로 전달 */}
        <Traits />
        <Units />

        <Participants>
          <ul>
            {/* 8명 반복 */}
            <li>
              <div className="participant__avatar">
                <div className="participant__avatar_img">
                  <img alt="participant__avatar_img" />
                </div>
              </div>
            </li>
          </ul>
        </Participants>
        {/* <Func>></Func> */}
      </MatchHistoryItem>
    </MatchHistoryItemsBox>
  );
};

export default MatchHistoryItems;

const MatchHistoryItemsBox = styled.div`

`;

const MatchHistoryItem = styled.div`
    margin-top: 5px;
    /* 위치 기준 */
    position: relative;

    display: flex;
    flex-direction: column;

    @media (min-width: 992px){
        flex-direction: row;
        align-items: center;
    }

`;


const Summary = styled.div`
    /* 992px 이하 가로 정렬 */
    display: flex;
    padding: 6px 35px 0;

    &:before{
      /* props로 전달 */
        content: "#6";
        position: absolute;
        left: 0;
        top: 0;
        width: 32px;
        height: 100%;
        background: #a0a0a0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        color: #fff;

        @media (min-width: 992px){
            width: 8px;
            content: "";

        }
    }

    @media (min-width: 992px){
        /* 세로 정렬 */
        display: flex;
        flex-direction: column;
        width: 130px;
        padding: 10px 10px 0 10px ;
        height: 100px;
    }

    .rank{
        display: none;

        @media (min-width: 992px){
            display: block;
            font-size: 16px;
            font-weight: 700;
            color: #a0a0a0;
            margin: 0 10px;
        }
        
    }
    .game_mode, .length, .date, .variation{
        color: grey;
        font-size: 12px;
        margin: 0 10px;

        @media (min-width: 992px){
            margin: 2.5px 10px;

        }
    }


`;

const Avatar = styled.div`
    display: none;
    /* padding: 0 35px; */
    
    /* 992px 이상에서만 보이도록 */
    @media (min-width: 992px){
      display: block;
      position: relative;
      margin: 0 15px 0 0;
    }

    .level{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 18px;
      height: 18px; 
      border: 1px solid #ca9372;
      border-radius: 50%;
      text-align:center;
      line-height: 18px;
      background: #000;
      color: #ca9372;
      font-size: 11px;
    }

    .avatar_box{
      width: 48px;
      height: 48px;
      /* 안보이는 부분 가리기 */
      overflow: hidden; 
      border-radius: 50%;
      border: 2px solid #ca9372;

      img{
        max-height: 48px;
        margin-left: -12px;
      }
    }

`;

const Participants = styled.div`
    display: none;

    @media (min-width: 1200px){
        display: block;
    }
`;

const Func = styled.div`

`;

