import React, { useState } from 'react';
import styled from 'styled-components';

import ToolTip from '../../../components/ToolTip';

// props로 star, champion, items 전달 받기
const Unit = () => {
    const [visible, setVisible] = useState(false);

    const onToggle = () => {
        setVisible(!visible);
    }

    return (
        <UnitContainer className="unit">
            {/* 몇 성? */}
            <img src="/star/cost1_stars3.png" alt="star" />
            {/* props 값으로 코스트 전달하여 테두리색 변경 */}
            <div className="champion" onMouseEnter={onToggle} onMouseLeave={onToggle}>
                <img src="/champion/gangplank.png" alt="champion_img" />
                { visible ? <ToolTip content="gangplank" position="top"/> : ' '}
            </div>
            {/* items 배열로 출력 */}
            <div className="items">
                <Item />
                <Item />
                <Item />
            </div>
        </UnitContainer>
    )
}

const Item = () => {
    const [visible, setVisible] = useState(false);

    const onToggle = () => {
        setVisible(!visible);
    }
    return (
        <div style={{position: 'relative'}} onMouseEnter={onToggle} onMouseLeave={onToggle}>
            <img src="/items/04.png" alt="item" />
            { visible ? <ToolTip content="용" position="bottom"/> : ' '}
        </div>
    );
};

// 사용된 units 배열 전달 받기
const Units = () => {
    return (
        <UnitsContainer>
            <Unit />
            <Unit />
            <Unit />
            <Unit />
        </UnitsContainer>
    );
};

export default Units;


const UnitsContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 0 0 0 40px;
    
    @media (min-width: 992px){
      /* 고정 width 값 설정 */
      min-width: 475px;
      margin: 0;
    }
`;

const UnitContainer = styled.div`
    width: 34px;
    margin-right: 5px;

    @media (min-width: 992px){
        width: 38px;
    }

    .champion{
        position: relative;
        display: flex;
        flex-direction: column;
        height: 34px;
        border: 2px solid #000;
        border-radius: 4px;

        img{
            width: 100%;
        }
        
        @media (min-width: 992px){
            height: 38px;
        }   
    }

    .items{
        display: flex;
        min-width: 34px;

        img{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 1.2px;
        }

        @media (min-width: 992px){
            min-width: 38px;
            img{
                width: 11px;
                height: 11px;
            }
        }


    }
`;


