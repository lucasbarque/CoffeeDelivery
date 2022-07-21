import styled from "styled-components";

export const Container = styled.main`
  max-width: 70rem;
  margin: 0 auto;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 2rem 0;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
export const Location = styled.div``;

const BUTTON_COLORS = {
  yellow: 'yellow-light',
  purple: 'purple-dark',
} as const

interface ButtonProps {
  color: keyof typeof BUTTON_COLORS
}

export const Cart = styled.button<ButtonProps>`
  background: ${(props) => props.theme[BUTTON_COLORS[props.color]]};
  border-radius: 6px;
  border: 0;
  width: 38px;
  height: 38px;
 
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']}
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};
    width: 20px;
    height: 20px;
    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
