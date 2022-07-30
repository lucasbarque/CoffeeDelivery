import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Container } from './styles'

interface SelectorProps {
  id: number;
}

export default function Selector({ id }: SelectorProps) {
  const { addToCart, removeFromCart } = useContext(CoffeeContext)

  return (
    <Container>
      <Minus weight="bold" onClick={() => console.log('oi')} />
      <span>6</span>
      <Plus weight="bold" onClick={() => removeFromCart(id)} />
    </Container>
  )
}
