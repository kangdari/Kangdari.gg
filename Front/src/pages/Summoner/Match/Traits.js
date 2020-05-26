import React, {useState} from 'react';
import styled from 'styled-components';

const TraitItem = () => {
        const [visible, setVisible] = useState(false);

    const onToggle = () => {
        setVisible(!visible)
    }

    return(
        <div className="trait_box" onMouseEnter={onToggle} onMouseLeave={onToggle}>
            <img src="/traits/trait_icon_starguardian.png" alt="trait" />
            { visible ? <div className="_tooltip">총잡이</div> : ' '}
      </div>
    )
}


const Traits = () => {


    return (
        <TraitsContainer>
          {/* 시너지 반복 출력 */}
            <TraitItem />
            <TraitItem />
        </TraitsContainer>
    );
};

export default Traits;

const TraitsContainer = styled.div`
    padding: 0 35px;
    display: flex;

    @media (min-widht: 992px){

    }

    /* props로 시너지 색상 전달 */
    .trait_box{
        margin-right: 3px;

        width: 24px;
        height: 14px;
        background: #ffb93b;
        position: relative;
        display: flex;
        justify-content: center;

        ._tooltip{
            display: block;
            position: absolute;
            top: -40px;
            width: 100px;
            background-color: #000000;
            color: #fff;
            padding: 5px 3px;
            border-radius: 4px;
            text-align: center;
            transition: all 0.2s ease-in-out;

            /* 삼각형 */
            &:after{
                content: '';
                position: absolute;
                bottom: -5px;
                left: 42%;
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid #000;
            }

            &.visible{
                opacity: 1;
            }
        }

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


