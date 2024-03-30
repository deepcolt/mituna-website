/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import {
  Container,
  Main,
  MainOverlay,
  GiantTitle,
  DownloadSection,
  PhoneContainer,
  ScreenShot
} from '../components/page.styles'
import Link from 'next/link'

export default function Home() {
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=deepcolt.com.mituna'

  return (
    <Container>
      <Main>
        <MainOverlay />
        <GiantTitle top>
          Mituna
        </GiantTitle>
        <DownloadSection>
          <Link href={playStoreUrl} target="_blank">
            <Image
              src="/assets/images/android.png"
              alt="Play Store"
              width={150}
              height={150}
            />
          </Link>
        </DownloadSection>
        <div>
          <PhoneContainer>
            <ScreenShot
              src="/assets/images/SuccessOnSprint.png"
              grayscale={false}
              selected={false}
              alt="Screen"
            />
            <img src="/assets/images/iphone.png" alt="Iphone" />
          </PhoneContainer>
        </div>
      </Main>
    </Container>
  )
}
