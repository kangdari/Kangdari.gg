import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ProfileMenu = ({ summonerInfo }) => {
    const { name } = summonerInfo;
    const url = `/summoner/${name}`;

    return (
        <ProfileMenuContainer>
            <LinkBox>
                <LinkItem to={url} activeClassName="active" >시즌3 종합</LinkItem>
                {/* 경로 설정 필요 */}
                <LinkItem to="/s" activeClassName="active" >매치 히스토리</LinkItem>
                <LinkItem to="/d" activeClassName="active" >LP 변화 추이</LinkItem>
            </LinkBox>
        </ProfileMenuContainer>
    );
};

export default ProfileMenu;

const ProfileMenuContainer = styled.div`
    background: rgba(0, 0, 0, .3);
`;

const LinkBox = styled.div`
    display: flex;

    min-width: 500px;

    @media (min-width: 576px){
        padding-left: 10px;
    }
    @media (min-width: 768px){
        padding-left: 24px;
    }
`;

const LinkItem = styled(NavLink)`
    cursor: pointer;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    padding: 0 16px;
    color: ${props => props.theme.whiteColor};

    &:hover{
        color: ${props => props.theme.blackColor};
        background: ${props => props.theme.whiteColor};
    }

    &.active{
        background: ${props => props.theme.whiteColor};
        color: ${props => props.theme.blackColor}; 
        font-weight: 700;
    }
`

