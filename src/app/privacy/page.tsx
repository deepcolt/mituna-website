'use client'

import ReactMarkdown from 'react-markdown'
import useSWR from 'swr'
import styled from 'styled-components'

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

const fetcher = (url: string) => fetch(url).then((res) => res.text())

const Page = () => {
  const { data, error } = useSWR('/api/privacy', fetcher)
  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>

  return (
    <Container>
      <ReactMarkdown>{data}</ReactMarkdown>
    </Container>
  )
}

export default Page
