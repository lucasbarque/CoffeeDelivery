import Header from '../../components/Header';

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  BannerContainer,
  BannerTitle,
  BannerDescription,
  Benefits,
  BenefitItem,
  BannerContent,
  CoffeeItems,
  CoffeeList,
} from './styles';
import { useEffect, useState } from 'react';
import CoffeeItem from '../../components/CoffeeItem';
import { useCart } from '../../hooks/useCart';

interface CoffeeType {
  id: number;
  title: string;
  types: ['Especial' | 'Alcoólico' | 'Gelado' | 'Tradicional' | 'Com Leite'];
  description: string;
  price: number;
  image: string;
}

export function Home() {
  const { cart, addCoffeeToCart } = useCart();
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);

  useEffect(() => {
    async function fetchCoffees() {
      const response = await fetch('http://localhost:3000/coffes').then((res) =>
        res.json()
      );
      setCoffees(response);
    }
    fetchCoffees();
  }, []);

  function getQuantity(coffeeId: number) {
    const itemInCart = cart.find((c) => c.id === coffeeId);

    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      return 1;
    }
  }

  return (
    <>
      <Header />

      <BannerContainer>
        <BannerContent>
          <div>
            <BannerTitle>
              Encontre o café perfeito para qualquer hora do dia
            </BannerTitle>
            <BannerDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </BannerDescription>

            <Benefits>
              <BenefitItem color='yellowDark'>
                <span>
                  <ShoppingCart weight='fill' size={16} />
                </span>
                Compra simples e segura
              </BenefitItem>
              <BenefitItem color='gray'>
                <span>
                  <Package weight='fill' size={16} />
                </span>
                Embalagem mantém o café intacto
              </BenefitItem>
              <BenefitItem color='yellow'>
                <span>
                  <Timer weight='fill' size={16} />
                </span>
                Entrega rápida e rastreada
              </BenefitItem>
              <BenefitItem color='purple'>
                <span>
                  <Coffee weight='fill' size={16} />
                </span>
                O café chega fresquinho até você
              </BenefitItem>
            </Benefits>
          </div>

          <div>
            <img src='/src/assets/coffee-image.png' alt='' />
          </div>
        </BannerContent>
      </BannerContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <CoffeeItems>
          {coffees.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
              coffee={coffee}
              quantity={getQuantity(coffee.id)}
            />
          ))}
        </CoffeeItems>
      </CoffeeList>
    </>
  );
}
