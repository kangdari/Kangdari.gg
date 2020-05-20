import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

import { useHistory } from 'react-router-dom';

// import Nav from './Nav'

const Header = () => {
    const [summonerName, setSummonerName] = useState('');
    const history = useHistory();

    const searchSummoner = e =>{
        e.preventDefault();
        // URL 이동
        if(summonerName){
            history.push(`/summoner/${summonerName}`); // 파라미터
        }else{
            console.log('입력')
        }
    }

    const onChange = e =>{
        setSummonerName(e.target.value);
    }

    return (
        <HeaderContainer>
            <Container>
                <LogoContainer to ="/">
                    <Logo src={'/logo.png'}/>
                    <Title>Kangdari.GG</Title>
                </LogoContainer>
                    
                {/* <Logo_img src="" alt="logo"/> */}
                <FormContainer>
                    <Form onSubmit={searchSummoner}>
                        <Input 
                            placeholder="소환사 검색"
                            onChange={onChange}
                            value={summonerName}
                            name="search"
                            type="text"
                        />
                        <Button type="submit">
                            <IoIosSearch size="18" color="red"/>
                        </Button>
                    </Form>
                </FormContainer>
            </Container>
            {/* <Nav/> */}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    background: ${props => props.theme.bgColor};
    /* 배경 이미지 */
    background-image: url('/bg-image7.jpg');
    background-repeat:no-repeat;
    background-size: cover;

`
const Container = styled.div`
    height: 180px;
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;


    /* 768px 이상에서 적용 */
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 768px;
        height: 240px;
    }
    @media (min-width: 992px){
        max-width: 960px;
    }
    @media (min-width: 1200px){
        max-width: 1140px;
    }
    
`

const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    padding-top: 10px;
`;

const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 15px;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
`;


const FormContainer = styled.div`
    padding-top: 10px;
`

const Form = styled.form`
    display: flex;
    width: 100%;
    position: relative;
    padding-right: 34px;
    background-color: #ffffff;
    border-radius: 4px;

    @media (min-width: 768px){
        width: 274px;
    }   
`

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    background: #ffffff;
    height: 30px;
    width: 100%;
    padding: 0 8px;
    margin-left: 4px;
`

const Button = styled.button`
    background: #ffffff;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 4px;
    height: 30px;
    outline: none;
    border: none;
`



export default Header;