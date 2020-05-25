import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import MatchHistoryItems from './MatchHistoryItems';


const MatchInfo = () => {
    // summonerName
    const url = `/summoner/쪼해피롱`;


    return (
        <MatchInfoContainer>
            <MatchHistoryBox>
                <MatchHistory>매치 히스토리</MatchHistory>
                <LinkBox>
                    <LinkItem to={url} activeClassName="active">전체</LinkItem>
                    <LinkItem to='/ㄴ' activeClassName="active">랭크</LinkItem>
                    <LinkItem to='/ㄴ' activeClassName="active">일반</LinkItem>
                </LinkBox>
                <MatchHistoryItems />
            </MatchHistoryBox>
        </MatchInfoContainer>
    );
};

export default MatchInfo;


const MatchInfoContainer = styled.div`
    margin-top: 10px;
`;
const MatchHistoryBox = styled.div`
    width: 100%;
`;
const MatchHistory = styled.div`
    font-size: 14px;
    color: #000000;
    background : #fff;
    padding-left: 16px;
    font-weight: 400;
    height: 45px;
    line-height: 45px;
    border: 1px solid #e6e6e6;
`;

const LinkBox = styled.div`
    display: flex;
    padding-left: 4px;
    height: 45px;
    line-height: 45px;
    margin-bottom: 6px;
`;

const LinkItem = styled(NavLink)`
    color: #000000;
    padding: 0 6px 4px;
    margin: 0 6px;
    font-size: 14px;
    border-bottom: 3px solid #fff;

    &.active{
        color: #ca9372;
        font-weight: 700;
        border-bottom-color: #ca9372;
    }

    &:hover{
        color: #ca9372;
        font-weight: 700;
        text-decoration: none;
    }
`


