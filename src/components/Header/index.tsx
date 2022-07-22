import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../Logo'
import { Buttons, Cart, Container, Location } from './styles'

export default function Header() {
  return (
    <Container>
      <Logo />
      <Buttons>
        <Location>
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </Location>
        <Cart>
          <ShoppingCart weight='fill' size={22} />
          <span>3</span>
        </Cart>
      </Buttons>
    </Container>
  )
}
