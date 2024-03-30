'use client'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1d87ff;
  color: white;
`

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const Select = styled.select`
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left: 10px;

  option {
    font-size: 1rem;
  }
`

const Paraphrase = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  span {
    font-weight: bold;
    margin-right: 10px;
  }
`

const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left: 10px;
`

const Button = styled.button`
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #1d87ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0070f3;
  }
`

const Page = () => {
  return (
    <Container>
      <Form action='/api/delete' method='POST'>
        <Image
          src="/assets/images/icon.png"
          alt="Mituna logo"
          width={50}
          height={50}
          style={{ marginBottom: '30px' }}
        />
        <Title>Supprimer mon compte</Title>
        <Paraphrase>
          <span>Pourquoi voulez-vous supprimer votre compte ?</span>
          <Select>
            <option value="distraction">C&apos;est une distraction</option>
            <option value="boring">C&apos;est ennuyant</option>
            <option value="space">Espace dans mon système</option>
            <option value="noreason">Pas de raison</option>
          </Select>
        </Paraphrase>
        <Paraphrase>
          <span>Je confirme que je veux supprimer mon compte</span>
          <Select required>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </Select>
        </Paraphrase>
        <Paraphrase>
          <span>Votre adresse email</span>
          <Input type="email" placeholder="xxx@gmail.com" required />
        </Paraphrase>
        <Paraphrase>
          <Button type="submit">Supprimer mon compte</Button>
        </Paraphrase>
      </Form>
    </Container>
  )
}

export default Page
