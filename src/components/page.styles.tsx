import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 20px 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Main = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: url('/assets/images/girl.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`

export const MainOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`

export const PhoneContainer = styled.div`
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

export const ScreenShot = styled.img<{
  grayscale: boolean
  selected: boolean
}>`
  filter: grayscale(${(props) => (props.grayscale ? 1 : 0)});
  z-index: ${(props) => (props.selected ? 10 : props.grayscale ? 5 : 1)};
`

export const SvgContainer = styled.div<{ page: number }>`
  position: absolute;
  top: 50%;
  left: auto;
  width: 144vw;
  height: 200%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: 50% 0;
  transition: 1s 0.2s cubic-bezier(0.88, 0.17, 0, 0.99);
  will-change: transform;
  transform: rotate(${(props) => props.page * 180}deg);
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

export const Svg = styled.svg`
  opacity: 0.8;
  x: 0;
  y: 0;
  overflow: hidden;
`

export const CompanyName = styled.div`
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

export const SectionNumeratedTitle = styled.div`
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

export const DownloadSection = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin: 0 20px;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;

    & img {
      margin: 0 10px;
    }
  }
`

export const GiantTitle = styled.div<{ top: boolean }>`
  position: absolute;
  top: ${(props) => (props.top ? '20px' : 'unser')};
  bottom: ${(props) => (props.top ? 'unset' : '20px')};
  width: 100%;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const SlideControls = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`

export const SlideControl = styled.div<{ selected: boolean }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? 'blue' : 'rgba(255, 255, 255, 0.6)'};
  margin: 10px 0;
  cursor: pointer;
`
