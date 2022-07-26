import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
`;
export const Order = styled.div`
  flex: 1;
`;
export const Address = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;
`;
export const Payment = styled.div`
  background-color: ${(props) => props.theme['base-card']};
`;
export const Cart = styled.div`
  width: 450px;
`;

const LABEL_ICON_COLOR = {
  yellow: 'yellow-dark',
  purple: 'purple-dark',
} as const;

interface LabelProps {
  iconColor: keyof typeof LABEL_ICON_COLOR;
}

export const Label = styled.div<LabelProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[LABEL_ICON_COLOR[props.iconColor]]};
  }

  div {
    span,
    strong {
      display: block;
      font-weight: 500;
    }
  }

  div {
    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 0.875rem;
    }

    strong {
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const Title = styled.span`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
`;
export const Items = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  border-radius: 6px 44px;
  padding: 2.5rem;
`;

export const ContainerButton = styled.div`
  margin-top: 1.5rem;

  button {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem;

  margin-top: 2rem;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  height: 2.625rem;
  border-radius: 4px;
  padding: 0 0.75rem;
  color: ${(props) => props.theme['base-text']};
  position: relative;

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`;
export const PaymentForm = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  height: 3.125rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;

  svg {
    color: ${(props) => props.theme['purple']};
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-weight: 700;
`;
export const Resume = styled.div`
  color: ${(props) => props.theme['base-text']};
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const Total = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 700;
  font-size: 1.25rem;

  display: flex;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-top: 0.5rem;

  > div {
    height: 2rem;
  }
`;
