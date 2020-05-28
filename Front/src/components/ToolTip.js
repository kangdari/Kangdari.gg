import React from 'react';
import styled from 'styled-components';

// content: 툴팁 내용
// position: 툴팁 위치
const ToolTip = ({ content, position }) => {
    return (
        <ToolTipBox className={position} position={position} >{content}</ToolTipBox>
    );
};

export default ToolTip;

const ToolTipBox = styled.span`
    position: absolute;
    min-width: 20px;
    max-width: 500px;
    background-color: #000000;
    color: #fff;
    padding: 8px 7px;
    border-radius: 4px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    /* 줄바꿈방지 */
    white-space:nowrap; 

    z-index : 100;

    &.top{
        /* 위에 위치한 툴팁 위치*/
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        &:after{
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            /* 아래쪽 화살표 */
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid #000;
        }
    }

    &.bottom{
        /* 아래 위치한 툴팁 위치 */
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        &:after{
            content: '';
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            width: 0;
            height: 0;
            /* 위쪽 화살표 */
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid #000;
        }
    }
`
