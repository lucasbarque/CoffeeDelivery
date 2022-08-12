import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Button from '../Button';
import Logo from '../Logo';
import { Buttons, Container, Location } from './styles';

export default function Header() {
  const { cart } = useCart();
  return (
    <Container>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <Buttons>
        <Location>
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </Location>
        <NavLink to='/checkout'>
          <Button
            kind='cart-badge'
            icon={<ShoppingCart weight='fill' />}
            labelQuantity={cart.length}
          />
        </NavLink>
      </Buttons>
    </Container>
  );
}
