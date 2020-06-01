import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';


const Videos = () => {
    return (
        <Container>
            <Row>
                <ColBox md={4} >
                    <VideoContainer>
                        <iframe className="video" title="video1" src="https://www.youtube.com/embed/0YbRVuSr9p0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </VideoContainer>
                </ColBox>
                <ColBox md={4} >
                    <VideoContainer>
                        <iframe className="video" title="video2" src="https://www.youtube.com/embed/gGkFH1u4joE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </VideoContainer>
                </ColBox>
                <ColBox md={4} >
                    <VideoContainer>
                        <iframe className="video" title="video3" src="https://www.youtube.com/embed/JRZn7Q4mf0I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </VideoContainer>
                </ColBox>
            </Row>
        </Container>
    );
};

export default Videos;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
`;

const ColBox = styled(Col)`
    padding: 0;

    @media (min-width: 768px){
        &:first-child{
        padding-left: 16px;
        }

        &:nth-child(2){
            padding: 0 8px;
        }

        &:last-child{
            padding-right: 16px;
        }
    }
`;


const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 56.25%;

    .video{
        position : absolute;
        top : 0;
        left : 0;
        bottom: 0;
        right: 0;
        width : 100%;
        height : 100%;
    }
`;

