import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

interface SelectorProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export default function Selector({ onIncrease, onDecrease, quantity }: SelectorProps) {
  return (
    <Container>
      <Minus weight="bold" onClick={onDecrease} />
      <span>{quantity}</span>
      <Plus weight="bold" onClick={onIncrease} />
    </Container>
  )
}
