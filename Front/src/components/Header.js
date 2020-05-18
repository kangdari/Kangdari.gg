import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

// import Nav from './Nav'

const Header = () => {
    const [summonerName, setSummonerName] = useState('');
    const history = useHistory();

    const searchSummoner = e =>{
        e.preventDefault();
        // URL 이동
        history.push(`/summoner/${summonerName}`); // 파라미터
    }

    const onChange = e =>{
        setSummonerName(e.target.value);
    }

    return (
        <HeaderContainer>
            <Container>
                {/* <Logo_img src="" alt="logo"/> */}
                <FormContainer>
                    <Form onSubmit={searchSummoner}>
                        <Input 
                            placeholder="소환사명 입력"
                            onChange={onChange}
                            value={summonerName}
                            name="search"
                            type="text"
                        />
                        <Button type="submit">x</Button>
                    </Form>
                </FormContainer>
            </Container>
            {/* <Nav/> */}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.bgColor};
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1140px;
    margin: 0 auto;
    min-height: 240px;
`

// const Logo_img = styled.img``

const FormContainer = styled.div`
    
`

const Form = styled.form`
    display: flex;
`

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    background: #ffffff;
    height: 30px;
    width: 100%;
    padding: 0 8px;
`

const Button = styled.button`
    border: none;
    outline: none;
    background: #ffffff;
    cursor: pointer;
`



export default Header;