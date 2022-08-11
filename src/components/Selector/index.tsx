import { Minus, Plus } from 'phosphor-react';
import { Container } from './styles';

interface SelectorProps {
  onRemoveItem: () => void;
  onAddItem: () => void;
  quantity: number;
}

export default function Selector({
  quantity,
  onRemoveItem,
  onAddItem,
}: SelectorProps) {
  return (
    <Container>
      <Minus weight='bold' onClick={onRemoveItem} />
      <span>{quantity}</span>
      <Plus weight='bold' onClick={onAddItem} />
    </Container>
  );
}
