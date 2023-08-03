import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        const background = document.querySelector(".homeBody");
        background.style.transform = "scale(1.2)";
        background.style.transform = "scale(1)";
        setTimeout(() => {
            const button = document.querySelector(".goDocumentButton");
            button.style.transform = "translate(0, 20px)";
            button.style.transition = "transform 1s, opacity 0.5s";
            button.style.transform = "translate(0)";
            button.style.opacity = "0.6";
            button.addEventListener("mouseenter", () => {
                button.style.opacity = "0.8";
            });
            button.addEventListener("mouseleave", () => {
                button.style.opacity = "0.6";
            });
            const subtitle = document.querySelector(".homeSubtitle");
            subtitle.style.opacity = "1";
        }, 100);

        for (let i = 1; i <= 10; i++) {
            titleWordMove(document.querySelector(`.homeMaintitleWord${i}`));
        }
    }, []);

    const titleWordMove = (argument) => {
        let time = argument.className.slice(-1);
        argument.style.opacity = "0";
        if (time !== "0") {
            argument.style.transition = `transform ${time * 0.1 + 1}s, opacity 1s`;
            argument.style.opacity = "1";
            argument.style.transform = "translate(0)";
        } else {
            time = 10;
            argument.style.transition = `transform ${time * 0.1 + 1}s, opacity 1s`;
            argument.style.opacity = "1";
            argument.style.transform = "translate(0)";
        }
    };
    
    return (
        <>
            <StyledBody className="homeBody">
                <StyledTitles>
                    <StyledSubtitle className="homeSubtitle">
                        대한민국 국민의 안전을 외국에서도 지켜주는
                    </StyledSubtitle>
                    <StyledMaintitle>
                        <StyledTitleWord className="homeMaintitleWord1">어</StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord2">서</StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord3">와&nbsp;</StyledTitleWord>
                        <StyledTitleWord className="yellow homeMaintitleWord4">
                            타
                            <StyledPointBox />
                        </StyledTitleWord>
                        <StyledTitleWord className="yellow homeMaintitleWord5">
                            지
                            <StyledPointBox />
                        </StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord6">는&nbsp;</StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord7">처</StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord8">음&nbsp;</StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord9">이</StyledTitleWord>
                        <StyledTitleWord className="homeMaintitleWord10">지</StyledTitleWord>
                    </StyledMaintitle>
                    <StyledDocumentButton
                        to="/document"
                        className="goDocumentButton"
                    >
                        가이드 보기
                    </StyledDocumentButton>
                </StyledTitles>
            </StyledBody>
        </>
    );
}

const StyledBody = styled.body`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
const StyledTitles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    // background: black;
    width: 900px;
    height: 350px;
    color: white;
    align-items: center;
    transition: width .4s, height .4s;

    @media only screen and (max-width: 1500px) {
        width: 750px;
        height: 300px;
    }
    @media only screen and (max-width: 1200px) {
        width: 600px;
        height: 250px;
    }
    @media only screen and (max-width: 900px) {
        width: 550px;
        height: 230px;
    }
    @media only screen and (max-width: 750px) {
        width: 460px;
        height: 210px;
    }
    @media only screen and (max-width: 600px) {
        width: 420px;
        height: 190px;
    }
    @media only screen and (max-width: 480px) {
        width: 360px;
        height: 160px;
    }
`;
const StyledSubtitle = styled.div`
    font-size: 40px;
    font-family: 'LINESeedKR-Rg';
    transition: opacity 1s, font-size .4s;
    opacity: 0;

    @media only screen and (max-width: 1500px) {
        font-size: 32px;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 24px;
    }
    @media only screen and (max-width: 900px) {
        font-size: 22px;
    }
    @media only screen and (max-width: 750px) {
        font-size: 20px
    }
    @media only screen and (max-width: 600px) {
        font-size: 18px
    }
    @media only screen and (max-width: 480px) {
        font-size: 15px;
    }
`;
const StyledMaintitle = styled.div`
    font-size: 90px;
    transition: font-size .4s;

    @media only screen and (max-width: 1500px) {
        font-size: 76px;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 62px;
    }
    @media only screen and (max-width: 900px) {
        font-size: 56px;
    }
    @media only screen and (max-width: 750px) {
        font-size: 48px
    }
    @media only screen and (max-width: 600px) {
        font-size: 44px
    }
    @media only screen and (max-width: 480px) {
        font-size: 36px;
    }
`;
const StyledDocumentButton = styled(Link)`
    width: 400px;
    height: 100px;
    background: #FFFCBD;
    color: #333;
    border: 2px solid #555;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    border-radius: 50px;
    margin-top: 60px;
    transform: translateY(50px);
    transition: all .4s;

    @media only screen and (max-width: 1500px) {
        font-size: 30px;
        width: 300px;
        height: 90px;
        margin-top: 50px;
        transform: translateY(30px);
    }
    @media only screen and (max-width: 1200px) {
        font-size: 24px;
        width: 250px;
        height: 80px;
        margin-top: 35px;
        transform: translateY(20px);
    }
    @media only screen and (max-width: 900px) {
        font-size: 20px;
        width: 220px;
        height: 70px;
        margin-top: 35px;
        transform: translateY(20px);
    }
    @media only screen and (max-width: 750px) {
        font-size: 18px;
        width: 200px;
        height: 60px;
        margin-top: 40px;
        transform: translateY(20px);
    }
    @media only screen and (max-width: 600px) {
        font-size: 18px;
        width: 180px;
        height: 60px;
        margin-top: 27px;
        transform: translateY(20px);
    }
    @media only screen and (max-width: 480px) {
        font-size: 16px;
        width: 160px;
        height: 50px;
        margin-top: 23px;
        transform: translateY(20px);
    }
`;

const StyledTitleWord = styled.span`
    display: inline-block;
    transform: translateY(40px);
    opacity: 0;
`;
const StyledPointBox = styled.div`

`;

export default Home;