import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { Container, Title, Description, Benefits, BenefitItem, Content } from "./styles"

export default function Banner() {
  return (
    <Container>

      <Content>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Description>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Description>

          <Benefits>
            <BenefitItem color="yellowDark">
              <span>
                <ShoppingCart weight="fill" size={16} />
              </span>
              Compra simples e segura
            </BenefitItem>
            <BenefitItem color="gray">
              <span>
                <Package weight="fill" size={16} />
              </span>
              Embalagem mantém o café intacto
            </BenefitItem>
            <BenefitItem color="yellow">
              <span>
                <Timer weight="fill" size={16} />
              </span>
              Entrega rápida e rastreada
            </BenefitItem>
            <BenefitItem color="purple">
              <span>
                <Coffee weight="fill" size={16} />
              </span>
              O café chega fresquinho até você
            </BenefitItem>
          </Benefits>
        </div>

        <div>
          <img src="/src/assets/coffee-image.png" alt="" />
        </div>
      </Content>
    </Container>
  )
}
