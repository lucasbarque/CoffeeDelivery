import {
  Bank,
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
  ContainerButton
} from './styles';

export function Checkout() {
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
          <Item>
            <Infos>
              <img src="/src/assets/expresso.svg" width={64} />
              <div>
                <span>Expresso Tradicional</span>
                {<Actions>
                  <Selector />
                  <Button kind="textIcon" icon={<Trash />}>Remover</Button>
                </Actions>}
              </div>

            </Infos>
            <Price>
              R$ 9,90
            </Price>
          </Item>

          <Resume>
            <span>Total de Itens</span>
            <span>R$ 29,70</span>
          </Resume>
          <Resume>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </Resume>
          <Total>
            <span>Total</span>
            <span>R$ 33,20</span>
          </Total>
          <ContainerButton>
            <Button kind='text'>Confirmar pedido</Button>
          </ContainerButton>
        </Items>
      </Cart>
    </Container>
  );
}
