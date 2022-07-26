import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
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
  Button,
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
            <Button>
              <CreditCard weight='regular' size={16} />
              <span>Cartão de Crédito</span>
            </Button>
            <Button>
              <Bank weight='regular' size={16} />
              <span>Cartão de Débito</span>
            </Button>
            <Button>
              <Money weight='regular' size={16} />
              <span>Dinheiro</span>
            </Button>
          </Buttons>
        </Address>
        <Payment></Payment>
      </Order>

      <Cart>
        <Title>Cafés selecionados</Title>
        <Items>
          <Item>
            <img src="/src/assets/expresso.svg" width={64} />
            {/* <Infos>
              <span>Expresso Tradicional</span>
              <Actions>
                <Selector>
                  <Minus weight="bold" />
                  <span>1</span>
                  <Plus weight="bold" />
                </Selector>
                <Button></Button>
              </Actions>
            </Infos> */}
          </Item>
        </Items>
      </Cart>
    </Container>
  );
}
