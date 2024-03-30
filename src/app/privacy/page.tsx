'use client'

import ReactMarkdown from 'react-markdown'
import useSWR from 'swr'
import styled from 'styled-components'
import { DotLoader } from 'react-spinners'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10% 30%;

  & > * {
    margin: 30px 0;
  }

  @media (max-width: 700px) {
    padding: 10% 5%;
  }
`

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const fetcher = (url: string) => fetch(url).then((res) => res.text())

const Page = () => {
  const { data, error } = useSWR('/api/privacy', fetcher)
  //Handle the error state
  if (error) return <Center>Failed to load</Center>
  //Handle the loading state
  if (!data) {
    return (
      <Center>
        <DotLoader />
        <h3>Loading...</h3>
      </Center>
    )
  }

  return (
    <Container>
      <ReactMarkdown>{data}</ReactMarkdown>
    </Container>
  )
}

export default Page
