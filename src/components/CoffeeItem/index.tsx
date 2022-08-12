import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import Button from '../Button';
import Selector from '../Selector';

import {
  Container,
  CoffeeTypeList,
  CoffeeType,
  Title,
  Description,
  Bottom,
  Price,
  Actions,
} from './styles';

interface Coffee {
  id: number;
  title: string;
  types?: string[] | null;
  description: string;
  price: number;
  image: string;
}

interface CoffeeItemProps {
  coffee: Coffee;
  quantity: number;
}

export default function CoffeeItem({ coffee, quantity }: CoffeeItemProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(quantity);
  const { changeCoffeeItemQuantity } = useCart();

  function handleAddCoffee() {
    setQuantityCoffee((state) => state + 1);
  }

  function handleRemoveCoffee() {
    if (quantity > 1) {
      setQuantityCoffee((state) => state - 1);
    }
  }
  function handleChangeItemQuantity() {
    changeCoffeeItemQuantity(
      {
        id: coffee.id,
        title: coffee.title,
        price: coffee.price,
        image: coffee.image,
      },
      quantityCoffee
    );
  }

  return (
    <Container>
      <img src={`/src/assets/${coffee.image}`} alt='Café Expresso' />

      <CoffeeTypeList>
        {coffee.types &&
          coffee.types.map((type) => (
            <CoffeeType key={type}>{type}</CoffeeType>
          ))}
      </CoffeeTypeList>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Bottom>
        <Price>
          <small>R$</small>{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(coffee.price)}
        </Price>

        <Actions>
          {
            <Selector
              quantity={quantityCoffee}
              onRemoveItem={handleRemoveCoffee}
              onAddItem={handleAddCoffee}
            />
          }
          <Button
            onClick={handleChangeItemQuantity}
            kind='cart'
            icon={<ShoppingCartSimple weight='fill' />}
          />
        </Actions>
      </Bottom>
    </Container>
  );
}
