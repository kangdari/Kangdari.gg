import React from "react";
import styled from 'styled-components';

import Traits from './Traits';

const MatchHistoryItems = () => {

    // const onToggle = (e) => {
    //     // setVisible(!visible);
    //     const $tooltip = document.querySelector('._tooltip');
    //     $tooltip.classList.toggle('visible');
    // }


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
        <Avatar>
          <span className="level">4</span>
          {/* avatar_box 여러 개... */}
          <div className="avatar_box">
              {/* before, after를 이용해 색 삼각형 구현 */}
            <img src="/" alt="img" />
          </div>
        </Avatar>
        {/* 시너지 목록 props로 전달 */}
        <Traits />


        
        <Units>
          <div className="unit">
            {/* 몇 성? */}
            <img alt="stars" />
            {/* props 값으로 코스트 전달하여 테두리색 변경 */}
            <div className="champion">
              <img alt="champion_img" />
            </div>
            {/* 아이템 bootstrap 토글 사용 */}
            <ul className="items">
              <img className="item" alt="item" />
            </ul>
          </div>
        </Units>
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
        <Func>></Func>
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
    }

`;


const Summary = styled.div`
    /* 992px 이하 가로 정렬 */
    display: flex;
    padding: 6px 35px 0;

    &:before{
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
    padding: 0 35px;

    @media (min-widht: 992px){

    }

`;


const Units = styled.div`
    padding: 0 35px;

`;

const Participants = styled.div`
    display: none;

    @media (min-width: 1200px){
        display: block;
    }
`;

const Func = styled.div`

`;

