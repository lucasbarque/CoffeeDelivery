import { MapPin, ShoppingCart } from 'phosphor-react'
import Button from '../Button'
import Logo from '../Logo'
import { Buttons, Container, Location } from './styles'

export default function Header() {
  return (
    <Container>
      <Logo />
      <Buttons>
        <Location>
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </Location>
        <Button kind='cart-badge' icon={<ShoppingCart weight='fill' />} labelQuantity={3} />
      </Buttons>
    </Container>
  )
}
