import { Container } from './styles'

interface ButtonProps {
  // kind: 'text' | 'textIcon' | 'cart' | 'cart-badge'
  kind: 'text' | 'textIcon' | 'cart' | 'cart-badge'
  children?: React.ReactNode
  icon?: JSX.Element
  labelQuantity?: number
}

export default function Button({ kind = 'text', children, icon, labelQuantity }: ButtonProps) {
  return (
    <Container appearance={kind}>
      {labelQuantity !== undefined && (<span>{labelQuantity}</span>)}
      {icon !== undefined && icon}
      {children}
    </Container >
  )
}
