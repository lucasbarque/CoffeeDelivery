import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // kind: 'text' | 'textIcon' | 'cart' | 'cart-badge'
  kind: 'text' | 'textIcon' | 'cart' | 'cart-badge';
  children?: React.ReactNode;
  icon?: JSX.Element;
  labelQuantity?: number;
}

export default function Button({
  kind = 'text',
  children,
  icon,
  labelQuantity,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} appearance={kind}>
      {labelQuantity !== undefined && <span>{labelQuantity}</span>}
      {icon !== undefined && icon}
      {children}
    </Container>
  );
}
