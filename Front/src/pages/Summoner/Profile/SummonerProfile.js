import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


// 아이콘, 레벨 , 이름, 갱신일
const SummonerProfile = ({ summonerInfo }) => {
    let { name, summonerLevel, profileIconId, revisionDate } = summonerInfo;
    const iconURL = `//ddragon.leagueoflegends.com/cdn/10.10.3208608/img/profileicon/${profileIconId}.png`; 
    revisionDate = moment(revisionDate).fromNow()
    return (
        <>
            <SummonerInfo>
                <ProfileIcon>
                    <img src={iconURL} alt="소환사 아이콘"/>
                    <Level>{summonerLevel}</Level>
                </ProfileIcon>
                <SummonerNameContainer>
                    <SummonerName>
                        {name}
                        <Region>KR</Region>
                    </SummonerName>
                    {/* 갱신 이벤트 추가 예정 */}
                    <SummonerButton>전적 갱신</SummonerButton>
                    <SummonerRevisionDate>최근 업데이트 : {revisionDate}</SummonerRevisionDate>
                </SummonerNameContainer>
            </SummonerInfo>
        </>
    );
};

export default SummonerProfile;

const SummonerInfo = styled.div`
    display: flex;
    width: 100%;
`;

const ProfileIcon = styled.div`
    position: relative;
    margin: 16px 8px 16px 12px;
    img{
        width: 64px;
        height: 64px;
    }
    @media (min-width: 768px){
        margin: 28px 16px 28px 24px;
        img{
            width: 106px;
            height: 106px;
        }
    }
`;

const Level = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 4px 6px;
    font-size: 12px;
    font-weight: 700;
    background: #ffffff; 
`;

const SummonerNameContainer = styled.div`
    /* display: flex; */
    margin-top: 16px;

    @media (min-width: 768px){
        margin-top: 28px;
    }

`;

const SummonerName = styled.div`
    display: flex;
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;

    @media (min-width: 768px){
        font-size: 24px;
    }
`;

const Region = styled.div`
    margin-left: 5px;
    margin-top: 2px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    padding: 4px 6px;
    background: #363944;
    border-radius: 4px;
`;

const SummonerButton = styled.button`
    outline: none;
    border: none;
    margin-top: 8px;
    background: #11b288;
    cursor: pointer;
    font-weight: 700;
    color: ${props => props.theme.whiteColor};
    height: 32px;
    padding: 0 8px;
    font-size: 12px;

    @media (min-width: 768px){
        padding: 0 14px;
        margin-top: 16px;
        height: 40px;
        font-size: 14px;
    }
`;

const SummonerRevisionDate = styled.div`
    margin-top: 4px;
    font-size: 10px;
    color: ${props => props.theme.whiteColor};

    @media (min-width: 768px){
        margin-top: 12px;
        font-size: 12px;
    }
`;


