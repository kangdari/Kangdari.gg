import React, {useState} from 'react';
import styled from 'styled-components';

import ToolTip from '../../../components/ToolTip';

const TraitItem = () => {
    const [visible, setVisible] = useState(false);

    const hideToolTip = () => {
        setVisible(false)
    }
    const showToolTip = () => {
        setVisible(true)
    }

    return(
        // <div className="trait_box" onMouseEnter={onToggle} onMouseLeave={onToggle}>
        <div className="trait_box" onMouseOver={showToolTip} onMouseLeave={hideToolTip}>
            <img src="/traits/trait_icon_starguardian.png" alt="trait" />
            {/* { visible ? <span className="_tooltip">9 별수호자</span> : ' '} */}
            { visible ? <ToolTip content="수호자" position="top" /> : ' '}

      </div>
    )
}


const Traits = () => {


    return (
        <TraitsContainer>
          {/* 시너지 반복 출력 */}
            <TraitItem />
            <TraitItem />
            <TraitItem />
            <TraitItem />
            <TraitItem />
        </TraitsContainer>
    );
};

export default Traits;

const TraitsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 33px;
    margin: 0 0 0 43px;

    @media (min-width: 992px){
        width: 140px;
        height: 65px;
        margin: 0 20px 0 0;
        flex-wrap: wrap;
    }

    /* props로 시너지 색상 전달 */
    .trait_box{
        margin: 5px 3px 5px 0;
        width: 24px;
        height: 14px;
        background: #ffb93b;
        position: relative;
        display: flex;
        justify-content: center;

        &:before{
            content: "";
            position: absolute;
            top: -6px;
            left: 0;
            width: 0;
            height: 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 6px solid #ffb93b;
        }

        &:after{
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 0;
            height: 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-top: 6px solid #ffb93b;
        }

        img{
            width: 18px;
            top: -1px;
            /* png 파일 색상을 white로 변경 */
            filter: brightness(0) invert(1); 
            /* -webkit-filter: brightness(0) invert(1);         */
            position: absolute;
        }
    }
`;


