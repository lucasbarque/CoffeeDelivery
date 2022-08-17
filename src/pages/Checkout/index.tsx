import { priceFormatter } from '../../utils/formatter';
import { useCart } from '../../hooks/useCart';

import {
  Bank,
  Coffee,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import Button from '../../components/Button';
import Selector from '../../components/Selector';

import {
  Container,
  Order,
  Address,
  Payment,
  Cart,
  Items,
  Item,
  Title,
  Label,
  Form,
  Input,
  Buttons,
  PaymentForm,
  Infos,
  Price,
  Resume,
  Total,
  Actions,
  ContainerButton,
} from './styles';
import { useNavigate } from 'react-router-dom';

interface Coffee {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function Checkout() {
  const { cart, changeCoffeeItemQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  function handleChangeItemQuantity(coffee: Coffee, quantity: number) {
    if (quantity > 0) {
      changeCoffeeItemQuantity(
        {
          id: coffee.id,
          title: coffee.title,
          price: coffee.price,
          image: coffee.image,
        },
        quantity
      );
    }
  }

  function handleRemoveItem(coffeeId: number) {
    removeItem(coffeeId);
  }

  function handleSubmitOrder() {
    clearCart();
    navigate('/success', { replace: true });
  }

  const total = cart.reduce((acc, item) => {
    return acc + item.coffee.price * item.quantity;
  }, 0);

  return (
    <Container>
      <Order>
        <Title>Complete seu pedido</Title>
        <Address>
          <Label iconColor='yellow'>
            <MapPinLine weight='regular' size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Label>
          <Form>
            <Input placeholder='CEP' />
            <Input
              placeholder='Rua'
              style={{ gridColumnStart: 1, gridColumnEnd: 4 }}
            />
            <Input
              placeholder='Número'
              style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
            />
            <Input
              placeholder='Complemento'
              style={{ gridColumnStart: 2, gridColumnEnd: 4 }}
            />
            <Input
              placeholder='Bairro'
              style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
            />
            <Input
              placeholder='Cidade'
              style={{ gridColumnStart: 2, gridColumnEnd: 3 }}
            />
            <Input
              placeholder='UF'
              style={{ gridColumnStart: 3, gridColumnEnd: 4 }}
            />
          </Form>
        </Address>
        <Address>
          <Label iconColor='purple'>
            <CurrencyDollar weight='regular' size={22} />
            <div>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Label>
          <Buttons>
            <PaymentForm>
              <CreditCard weight='regular' size={16} />
              <span>Cartão de Crédito</span>
            </PaymentForm>
            <PaymentForm>
              <Bank weight='regular' size={16} />
              <span>Cartão de Débito</span>
            </PaymentForm>
            <PaymentForm>
              <Money weight='regular' size={16} />
              <span>Dinheiro</span>
            </PaymentForm>
          </Buttons>
        </Address>
        <Payment></Payment>
      </Order>

      <Cart>
        <Title>Cafés selecionados</Title>
        <Items>
          {cart.length > 0 &&
            cart.map((item) => (
              <Item key={item.coffee.id}>
                <Infos>
                  <img src={`/${item.coffee.image}`} width={64} />
                  <div>
                    <span>{item.coffee.title}</span>
                    {
                      <Actions>
                        <Selector
                          onAddItem={() =>
                            handleChangeItemQuantity(
                              item.coffee,
                              item.quantity + 1
                            )
                          }
                          onRemoveItem={() =>
                            handleChangeItemQuantity(
                              item.coffee,
                              item.quantity - 1
                            )
                          }
                          quantity={item.quantity}
                        />
                        <Button
                          kind='textIcon'
                          icon={<Trash />}
                          onClick={() => handleRemoveItem(item.coffee.id)}
                        >
                          Remover
                        </Button>
                      </Actions>
                    }
                  </div>
                </Infos>
                <Price>
                  {priceFormatter.format(item.coffee.price * item.quantity)}
                </Price>
              </Item>
            ))}

          {cart.length > 0 ? (
            <>
              <Resume>
                <span>Total de Itens</span>
                <span>{priceFormatter.format(total)}</span>
              </Resume>
              <Resume>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </Resume>
              <Total>
                <span>Total</span>
                <span>{priceFormatter.format(total + 3.5)}</span>
              </Total>
              <ContainerButton onClick={handleSubmitOrder}>
                <Button kind='text'>Confirmar pedido</Button>
              </ContainerButton>
            </>
          ) : (
            <span>Nenhum item selecionado</span>
          )}
        </Items>
      </Cart>
    </Container>
  );
}
