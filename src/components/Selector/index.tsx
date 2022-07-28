import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

export default function Selector() {
  return (
    <Container>
      <Minus weight="bold" />
      <span>6</span>
      <Plus weight="bold" />
    </Container>
  )
}
