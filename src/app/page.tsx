/* eslint-disable @next/next/no-img-element */
'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import { useRef, useState, useCallback, useEffect } from 'react'
import {
  Container,
  Main,
  MainOverlay,
  GiantTitle,
  SvgContainer,
  Svg,
  SectionTitle,
  SectionNumeratedTitle,
  DownloadSection,
  SlideControls,
  SlideControl,
  PhoneContainer,
  ScreenShot
} from './components/page.styles'
import Link from 'next/link'

export default function Home() {
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=deepcolt.com.mituna'
  // const appStoreUrl =
  //   'https://apps.apple.com/store/apps/details?id=com.deepcolt.mituna'

  const sectionsTitleTexts: string[] = [
    'Fluide et Interactive',
    'Défiez-vous',
    'Question du jour'
  ]
  const sectionsDescriptionTexts: string[] = [
    'Mituna veut être une application fun et une expérience utilisateur incroyable.',
    'Défiez vos connaissances avec notre collection de questions captivantes.',
    'Chaque jour, une nouvelle question est posée.'
  ]
  const sectionsNumeratedTitleTexts = [
    { top: 'Application', bottom: 'fun' },
    { top: 'Passez', bottom: 'un bon moment' },
    { top: 'Gagnez', bottom: 'en connaissance' }
  ]
  const titleIcons: string[] = [
    '/assets/images/icons8-quiz-40.png',
    '/assets/images/icons8-games-64.png',
    '/assets/images/icons8-trophy-40.png'
  ]

  const svgRef = useRef<SVGSVGElement>(null)
  const sectionTitleRef = useRef<HTMLDivElement>(null)
  const sectionNumTitleRef = useRef<HTMLDivElement>(null)
  const downloadSectionRef = useRef<HTMLDivElement>(null)
  const giantTitleRef = useRef<HTMLDivElement>(null)
  const screenShotOneRef = useRef<HTMLImageElement>(null)
  const screenShotTwoRef = useRef<HTMLImageElement>(null)
  const screenShotThreeRef = useRef<HTMLImageElement>(null)

  const [svgTopPosition, setTopSvgPosition] = useState(false)
  const [wheelPause, setWheelPause] = useState(false)
  const [page, setPage] = useState(0)
  const [oldPage, setOldPage] = useState(-1)
  const [touchstartY, setTouchStartY] = useState(0)

  const handleTransition = useCallback(
    (index: number) => {
      if (index > 2 || index < 0) return
      setOldPage(page)
      setPage(index)
      setTopSvgPosition(index % 2 !== 0)
    },
    [page]
  )

  const handleKeyPressed = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        handleTransition(page + 1)
      } else if (e.key === 'ArrowDown') {
        handleTransition(page - 1)
      }
    },
    [handleTransition, page]
  )

  const fromLeftToRight = (element: HTMLElement | null) => {
    gsap.to(element, { x: -1000, opacity: 0 }).then(() => {
      setTimeout(() => {
        gsap.to(element, { x: 0, opacity: 1, ease: gsap.parseEase('back') })
      }, 500)
    })
  }

  const animation = useCallback(() => {
    fromLeftToRight(sectionTitleRef.current)
    fromLeftToRight(sectionNumTitleRef.current)
    const giantsOffsets = [1000, -1000, 1000]

    if (oldPage > 0) {
      const oldScreen = [
        screenShotOneRef,
        screenShotTwoRef,
        screenShotThreeRef
      ][oldPage]

      gsap.to(oldScreen.current, { x: 100, opacity: 0 }).then(() => {
        gsap.to(oldScreen.current, { x: 0 }).then(() => {
          gsap.to(oldScreen.current, { opacity: 1 })
        })
      })
    }

    gsap
      .to(downloadSectionRef.current, { y: giantsOffsets[page], opacity: 0 })
      .then(() => {
        setTimeout(() => {
          gsap.to(downloadSectionRef.current, {
            y: 0,
            opacity: 1,
            ease: gsap.parseEase('power3')
          })
        }, 500)
      })

    gsap
      .to(giantTitleRef.current, { y: giantsOffsets[page], opacity: 0 })
      .then(() => {
        setTimeout(() => {
          gsap.to(giantTitleRef.current, {
            y: 0,
            opacity: 1,
            ease: gsap.parseEase('power3')
          })
        }, 500)
      })
  }, [oldPage, page])

  const handleNavigation = useCallback(
    (event: WheelEvent) => {
      if (wheelPause) return
      setWheelPause(true)
      if (event.deltaY > 0) {
        handleTransition(page + 1)
      } else {
        handleTransition(page - 1)
      }
      setTimeout(() => {
        setWheelPause(false)
      }, 1000)
    },
    [handleTransition, page, wheelPause]
  )

  const handleSwipe = useCallback((event: TouchEvent) => {
    setTouchStartY(event.changedTouches[0].clientY)
  }, [])

  const handleSwipeEnd = useCallback(
    (event: TouchEvent) => {
      const touchendX = event.changedTouches[0].clientY
      if (touchendX < touchstartY && isMobile) {
        handleTransition(page + 1)
      } else if (isMobile) {
        handleTransition(page - 1)
      }
    },
    [handleTransition, page, touchstartY]
  )

  useEffect(() => {
    animation()
  }, [animation])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed)
    return () => {
      window.removeEventListener('keydown', handleKeyPressed)
    }
  }, [handleKeyPressed])

  useEffect(() => {
    document.addEventListener('wheel', (e) => handleNavigation(e))

    return () => {
      document.removeEventListener('wheel', (e) => handleNavigation(e))
    }
  }, [handleNavigation])

  useEffect(() => {
    document.addEventListener('touchstart', handleSwipe)

    document.addEventListener('touchend', handleSwipeEnd)
    return () => {
      document.removeEventListener('touchstart', handleSwipe)
      document.removeEventListener('touchend', handleSwipeEnd)
    }
  }, [handleSwipe, handleSwipeEnd])

  return (
    <Container>
      <Main>
        <MainOverlay />
        <GiantTitle ref={giantTitleRef} top={svgTopPosition}>
          Greatest
        </GiantTitle>
        <SvgContainer page={page}>
          <Svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 3000 3000"
            xmlSpace="preserve"
          >
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="1543.491"
              y1="1474.8508"
              x2="2952.8528"
              y2="659.8721"
            >
              <stop offset="0" style={{ stopColor: '#131217' }}></stop>
              <stop offset="1" style={{ stopColor: '#292A33' }}></stop>
            </linearGradient>
            <path
              className="st0"
              d="M0,3000h3000V0c0,0-540,0-570.14,0C2071,0,1861.65,130,1500.33,130C1138.55,130,929,0,569.66,0  C539.99,0,0,0,0,0V3000L0,3000z"
            ></path>
          </Svg>
        </SvgContainer>
        <SectionTitle ref={sectionTitleRef}>
          <Image src={titleIcons[page]} alt="Chat" width={40} height={40} />
          <div>
            <h1>{sectionsTitleTexts[page]}</h1>
            <p>{sectionsDescriptionTexts[page]}</p>
          </div>
        </SectionTitle>
        <SectionNumeratedTitle ref={sectionNumTitleRef}>
          <h1>0{page + 1}</h1>
          <h1>
            {sectionsNumeratedTitleTexts[page].top}
            <br />
            {sectionsNumeratedTitleTexts[page].bottom}
          </h1>
        </SectionNumeratedTitle>
        <DownloadSection ref={downloadSectionRef}>
          {/* <Link href={appStoreUrl} target="_blank">
            <Image
              src="/assets/images/ios.png"
              alt="App Store"
              width={150}
              height={50}
            />
          </Link> */}
          <Link href={playStoreUrl} target="_blank">
            <Image
              src="/assets/images/android.png"
              alt="play Store"
              width={150}
              height={50}
            />
          </Link>
        </DownloadSection>
        <SlideControls>
          <SlideControl
            onClick={(e) => handleTransition(0)}
            selected={page === 0}
          ></SlideControl>
          <SlideControl
            onClick={(e) => handleTransition(1)}
            selected={page === 1}
          ></SlideControl>
          <SlideControl
            onClick={(e) => handleTransition(2)}
            selected={page === 2}
          ></SlideControl>
        </SlideControls>
        <PhoneContainer>
          <ScreenShot
            ref={screenShotOneRef}
            src="/assets/images/SuccessOnSprint.png"
            grayscale={oldPage === 0}
            selected={page === 0}
            alt="Screen One"
          />
          <ScreenShot
            ref={screenShotTwoRef}
            src="/assets/images/Question.png"
            grayscale={oldPage === 1}
            selected={page === 1}
            alt="Screen Two"
          />
          <ScreenShot
            ref={screenShotThreeRef}
            src="/assets/images/LeaderBoard.png"
            grayscale={oldPage === 2}
            selected={page === 2}
            alt="Screen Three"
          />
          <img src="/assets/images/iphone.png" alt="Iphone" />
        </PhoneContainer>
      </Main>
    </Container>
  )
}
