import React, { useEffect } from "react";
import styled from "styled-components";
import MockUpImg from "../img/howtouse.png";
import { Link } from "react-router-dom";

const Document = () => {
useEffect(() => {
    document.body.style.overflow = "visible";
    
    const headerTitle = document.querySelector(".documentHeaderTitle");
    let scroll = 0;
    let scrollDown = 0;
    window.addEventListener("scroll", () => {
        scroll = window.scrollY;
        console.log(scroll);
        if (scroll >= 160) {
            scrollDown = scroll - 160;
            scrollTextHanler(scrollDown);
        }
        if (scroll < 160) {
            scrollReset();
        }
    })
    const scrollTextHanler = (scroll) => {
        headerTitle.style.transform = `translateY(${scroll + 30}px)`;
        console.log(scroll+"px");
    }
    const scrollReset = () => {
        headerTitle.style.transform = "translate(0)";
    }
}, [])

    return (
        <>
            <SytledDocument>
                <StyledHeader className="documentHeader">
                    <StyledHeaderTitle className="documentHeaderTitle" to="/">어서와 타지는 처음이지</StyledHeaderTitle>
                </StyledHeader>
                <StyledContent>
                    <StyledGuide>
                        <StyledIntroduce>
                            <StyledTitle>소개</StyledTitle>
                            <StyledExlanation>
                                 어서와 타지는 처음 이지 앱은 대한 민국의 국민이 외국 으로 여행 또는 출장을 하여 타지에 갔을 때 문제가 발생 하여 영사관 또는 대사관을 찾아 가
                                야 하는데 어려움을 겪지 않도록 영사관 대사관 위치를 알려 주고 여행 금지 나라 또는 군사 시설과 같이 여행객 또는 민간인이 출입 하면 안되는 구
                                역에 대하여 표시를 해주어 혹시 모를 상황을 예방 해주는 앱으로 사용자가 처하게 되는 곤란한 또는 위험한 상황을 해결 할 수 있도록 도와 줍니다.
                                해당 앱을 통하여 외국에 생활 중인 우리 나라 국민의 안전을 지켜 더 나아가 외교적 으로 국방 적 으로도 영향을 미치는 앱 입니다.
                            </StyledExlanation>
                        </StyledIntroduce>
                        <StyledLocation>
                            <StyledTitle>영사관 대사관 위치 가이드</StyledTitle>
                            <StyledExlanation>
                                 어서와 타지는 처음 이지 앱은 주요 서비스로 영사관 대사관의 위치를 Toggle 버튼을 통해 on / off를 하여 사용자가 쉽게 영사관 대사관 위치를 
                                찾아 갈 수 있도록 합니다. 또한 지도 위에 사용자의 위치와 영사관 대사관의 위치의 마커가 존재 함으로 찾기 더 쉽고 해당 영사관 대사관의 운영 시
                                간 등의 여러 정보를 확인 할 수 있도록 정보를 사용자에게 제공 합니다.
                            </StyledExlanation>
                        </StyledLocation>
                        <StyledArea>
                            <StyledTitle>여행 금지 국가 민간인 금지 구역 가이드</StyledTitle>
                            <StyledExlanation>
                             세계 에는 치안 또는 전쟁의 이유로 몇몇의 나라 들이 여행 금지 국가인 경우가 있습니다. 또한 민간인 여행객이 접근과 출입이 불가능 한 구역도 존
                            재 합니다. 이 것과 관련 하여 어서와 타지는 처음 이지 앱은 이 2가지 경우에 대하여 우리 나라 국민이 곤란한 상황이 생기지 않도록 지도에 해당 구
                            역을 표시 해 주어서 혹시 헷갈리 거나 길을 잃어 해당 구역을 들어 가는 불상사가 일어 나지 않도록 합니다.
                            </StyledExlanation>
                        </StyledArea>
                        <StyledHowtouse>
                            <StyledMovkupImg src={MockUpImg} />
                        </StyledHowtouse>
                    </StyledGuide>
                </StyledContent>
            </SytledDocument>
        </>
    );
}

const SytledDocument = styled.div`
    width: 100%;
    background: #f7f7f7;
`;
const StyledHeader = styled.header`
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledContent = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledGuide = styled.div`
    width: 950px;
    padding: 0 20px;
    z-index: 3;
`;
const StyledIntroduce = styled.div`
    padding: 20px 0 15px 0;
    border-bottom: 1px solid #C7C7C7;
    margin-bottom: 15px;
`;
const StyledLocation = styled.div`
    padding: 10px 0 15px 0;
    border-bottom: 1px solid #C7C7C7;
    margin-bottom: 15px;

`;
const StyledArea = styled.div`
    padding: 10px 0 15px 0;
    border-bottom: 1px solid #C7C7C7;
    margin-bottom: 15px;

`;
const StyledHeaderTitle = styled(Link)`
    font-size: 80px;
    color: #fff;
    display: block;
    transition: transform .1s;
`;
const StyledTitle = styled.p`
    font-size: 36px;
    margin-bottom: 10px;
`;
const StyledExlanation = styled.p`
    font-size: 18px;
    font-family: 'LINESeedKR-Rg';
`; 
const StyledHowtouse = styled.div`
    margin-bottom: 70px;
    border-bottom: 1px solid #C7C7C7;
`;
const StyledMovkupImg = styled.img`
    width: 910px;
`;


export default Document;