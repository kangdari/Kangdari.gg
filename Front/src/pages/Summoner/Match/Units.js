import React from 'react';
import styled from 'styled-components';

// props로 star, champion, items 전달 받기
const Unit = () => {

    return (
        <UnitContainer className="unit">
            {/* 몇 성? */}
            <img src="/star/cost1_stars3.png" alt="star" />
            {/* props 값으로 코스트 전달하여 테두리색 변경 */}
            <div className="champion">
                <img src="/champion/gangplank.png" alt="champion_img" />
            </div>
            {/* items 배열로 출력 */}
            <div className="items">
                <img src="/items/04.png" alt="item" />
                <img src="/items/04.png" alt="item" />
                <img src="/items/04.png" alt="item" />
            </div>
        </UnitContainer>
    )
}

// 사용된 units 배열 전달 받기
const Units = () => {
    return (
        <UnitsContainer>
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


