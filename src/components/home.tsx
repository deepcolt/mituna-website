import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import styled from 'styled-components';
import mainBackgroundImage from "../assets/images/angelo-moleele-s2WxsnxeRc4-unsplash.jpg";
import iphone from "../assets/images/iphone.png";
import chatBubble from "../assets/images/icons8-chat-40.png";
import games from "../assets/images/icons8-games-64.png";
import chatbot from "../assets/images/icons8-chatbot-60.png";
import ios from "../assets/images/ios.png";
import android from "../assets/images/android.png";
import screen1 from "../assets/images/screen-1.png";
import screen2 from "../assets/images/screen-2.png";
import screen3 from "../assets/images/screen-3.png";
import deepcolt from "../assets/images/logo_deepcolt_dark.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 20px 30px;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`

const Main = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: url(${mainBackgroundImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
`;

const PhoneContainer = styled.div`
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img:last-child {
    height: 105%;
    z-index: 20;
  }

  & img {
    position: absolute;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 30%;
  }
`

const ScreenShot = styled.img<{ grayscale: boolean, selected: boolean }>`
  filter: grayscale(${props => props.grayscale ? 1 : 0});
  z-index: ${props => props.selected ? 10 : (props.grayscale ? 5 : 1)};
`

const SvgContainer = styled.div<{ page: number }>`
  position: absolute;
  top: 50%;
  left: auto;
  width: 144vw;
  height: 200%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: 50% 0;
  transition: 1s .2s cubic-bezier(.88,.17,0,.99);
  will-change: transform;
  transform: rotate(${props => props.page * 180}deg);
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  outline: 0;

  @media (max-width: 768px) {
    width: 172vw;
  }

  @media (max-width: 680px) {
    width: 255vw;
  }
`

const Svg = styled.svg`
  opacity: 0.8;
  x: 0;
  y: 0;
  overflow: hidden;
`

const CompanyName = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  & img {
    height: 35px;
  }

  @media (max-width: 768px) {
    left: 10%;
    top: 10px;
  }
`

const SectionTitle = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  display: flex;
  color: white;
  opacity: 0;

  & img {
    width: 40px;
    height: 40px;
    margin-right: 40px;
  }

  & p {
    width: 50%;
    margin-top: 20px;
    color: rgba(255, 255, 255, .7);
  }

  @media screen and (max-width: 768px) {
    top: 10%;
    left: 4%;

    & img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }

    & p {
      width: 90%;
      margin-top: 10px;
    }
  }
`

const SectionNumeratedTitle = styled.div`
  position: absolute;
  bottom: 20%;
  left: 8%;
  opacity: 0;
  color: white;
  display: flex;
  font-size: 1.4rem;
  
  & h1 {
    font-weight: 400;
  }

  & h1:first-child {
    margin-right: 40px;
  }

  @media screen and (max-width: 768px) {
    bottom: 15%;
    font-size: 1rem;
  }
`

const DownloadSection = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;

  & img {
    margin: 0 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;

    & img {
      margin: 0 10px;
    }
  }
`

const GiantTitle = styled.div<{ top: boolean }>`
  position: absolute;
  top: ${props => props.top ? '20px' : 'unser'};
  bottom: ${props => props.top ? 'unset' : '20px'};
  width: 100%;
  color: rgba(255, 255, 255, .5);
  font-size: 10rem;
  font-weight: bold;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const SlideControls = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`

const SlideControl = styled.div<{ selected: boolean }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${props => props.selected ? 'blue' : 'rgba(255, 255, 255, 0.6)'};
  margin: 10px 0;
  cursor: pointer;
`



export default function Home(): React.ReactElement {
    const sectionsTitleTexts: string[] = ["Rapide et Fiable", "Défiez vos amis", "Annastasie et IA"];
    const sectionsDescriptionTexts: string[] = ["Bongola Chat vous permets de discuter et faire des appels à travers le monde.", "Défiez vos amis avec notre collection des jeux pour une exprérience de discussions plus captivante.", "Intelligence Artificielle est au coeur de Bongola chat, découvrez les fonctionnalités de l'IA."];
    const sectionsNumeratedTitleTexts = [
        { top: "Traduisez", "bottom": "les messsages" },
        { top: "Passez", "bottom": "un bon moment" },
        { top: "Intelligence", "bottom": "Artificielle" },
    ];
    const titleIcons = [chatBubble, games, chatbot];

    const svgRef = useRef<SVGSVGElement>(null);
    const sectionTitleRef = useRef<HTMLDivElement>(null);
    const sectionNumTitleRef = useRef<HTMLDivElement>(null);
    const downloadSectionRef = useRef<HTMLDivElement>(null);
    const giantTitleRef = useRef<HTMLDivElement>(null);
    const screenShotOneRef = useRef<HTMLImageElement>(null);
    const screenShotTwoRef = useRef<HTMLImageElement>(null);
    const screenShotThreeRef = useRef<HTMLImageElement>(null);

    const [svgTopPosition, setTopSvgPosition] = useState(false);
    const [wheelPause, setWheelPause] = useState(false);
    const [page, setPage] = useState(0);
    const [oldPage, setOldPage] = useState(-1);

    const handleTransition = useCallback((index: number) => {
        if (index > 2 || index < 0) return;
        setOldPage(page);
        setPage(index)
        setTopSvgPosition((index % 2) !== 0);
    }, [page]);


    const handleKeyPressed = useCallback((e: KeyboardEvent) => {
        console.log(e.key);
        if (e.key === "ArrowUp") {
            handleTransition(page + 1);
        } else if (e.key === "ArrowDown") {
            handleTransition(page - 1);
        }
    }, [handleTransition, page]);

    const fromLeftToRight = (element: HTMLElement | null) => {
        gsap.to(element, { x: -1000, opacity: 0 }).then(() => {
            setTimeout(() => {
                gsap.to(element, { x: 0, opacity: 1, ease: gsap.parseEase("back") });
            }, 500);
        });
    }

    const animation = useCallback(() => {
        fromLeftToRight(sectionTitleRef.current);
        fromLeftToRight(sectionNumTitleRef.current);
        const giantsOffsets = [1000, -1000, 1000];

        if (oldPage > 0) {

            const oldScreen = [screenShotOneRef, screenShotTwoRef, screenShotThreeRef][oldPage];

            gsap.to(oldScreen.current, { x: 100, opacity: 0 }).then(() => {
                gsap.to(oldScreen.current, { x: 0 }).then(() => {
                    gsap.to(oldScreen.current, { opacity: 1 });
                });
            });
        }


        gsap.to(downloadSectionRef.current, { y: giantsOffsets[page], opacity: 0 }).then(() => {
            setTimeout(() => {
                gsap.to(downloadSectionRef.current, { y: 0, opacity: 1, ease: gsap.parseEase("power3") });
            }, 500);
        });

        gsap.to(giantTitleRef.current, { y: giantsOffsets[page], opacity: 0 }).then(() => {
            setTimeout(() => {
                gsap.to(giantTitleRef.current, { y: 0, opacity: 1, ease: gsap.parseEase("power3") });
            }, 500);
        });
    }, [oldPage, page]);

    useEffect(() => {
        animation();
    }, [animation]);


    useEffect(() => {
        window.addEventListener('keydown', handleKeyPressed);
        return () => {
            window.removeEventListener('keydown', handleKeyPressed);
        }
    }, [handleKeyPressed]);

    const handleNavigation = useCallback((event: WheelEvent) => {
        console.log(page, event.deltaY)
        if (wheelPause) return;
        setWheelPause(true);
        if (event.deltaY > 0) {
            handleTransition(page + 1);
        } else {
            handleTransition(page - 1);
        }
        setTimeout(() => {
            setWheelPause(false);
        }, 1000);
    }, [handleTransition, page, wheelPause]);

    useEffect(() => {
        document.addEventListener("wheel", (e) => handleNavigation(e));

        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            document.removeEventListener("wheel", (e) => handleNavigation(e));
        };
    }, [handleNavigation]);

    
    useEffect(() => {
      document.title = "Bongola Chat"
    }, [])

    return (
        <Container>
            <Main>
                <MainOverlay />
                <GiantTitle ref={giantTitleRef} top={svgTopPosition}>
                    Greatest
                </GiantTitle >
                <SvgContainer page={page}>
                    <Svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 3000 3000" xmlSpace="preserve">
                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1543.491" y1="1474.8508" x2="2952.8528" y2="659.8721">
                            <stop offset="0" style={{ stopColor: '#131217' }}></stop>
                            <stop offset="1" style={{ stopColor: '#292A33' }}></stop>
                        </linearGradient>
                        <path className="st0" d="M0,3000h3000V0c0,0-540,0-570.14,0C2071,0,1861.65,130,1500.33,130C1138.55,130,929,0,569.66,0  C539.99,0,0,0,0,0V3000L0,3000z"></path>
                    </Svg>
                </SvgContainer>
                <CompanyName>
                    <a href="https://deepcolt.com" target="_blank" rel="noreferrer">
                        <img src={deepcolt} alt="Deepcolt logo" />
                    </a>
                </CompanyName>
                <SectionTitle ref={sectionTitleRef}>
                    <img src={titleIcons[page]} alt="Chat" />
                    <div>
                        <h1>{sectionsTitleTexts[page]}</h1>
                        <p>{sectionsDescriptionTexts[page]}</p>
                    </div>
                </SectionTitle>
                <SectionNumeratedTitle ref={sectionNumTitleRef}>
                    <h1>0{page + 1}</h1>
                    <h1>{sectionsNumeratedTitleTexts[page].top}<br />{sectionsNumeratedTitleTexts[page].bottom}</h1>
                </SectionNumeratedTitle>
                <DownloadSection ref={downloadSectionRef}>
                    <img src={ios} alt="App Store" />
                    <img src={android} alt="play Store" />
                </DownloadSection>
                <SlideControls>
                    <SlideControl onClick={(e) => handleTransition(0)} selected={page === 0}></SlideControl>
                    <SlideControl onClick={(e) => handleTransition(1)} selected={page === 1}></SlideControl>
                    <SlideControl onClick={(e) => handleTransition(2)} selected={page === 2}></SlideControl>
                </SlideControls>
                <PhoneContainer>
                    <ScreenShot ref={screenShotOneRef} src={screen1} grayscale={oldPage === 0} selected={page === 0} alt="Screen One" />
                    <ScreenShot ref={screenShotTwoRef} src={screen2} grayscale={oldPage === 1} selected={page === 1} alt="Screen Two" />
                    <ScreenShot ref={screenShotThreeRef} src={screen3} grayscale={oldPage === 2} selected={page === 2} alt="Screen Three" />
                    <img src={iphone} alt="Iphone" />
                </PhoneContainer>
            </Main>
        </Container>
    );
}