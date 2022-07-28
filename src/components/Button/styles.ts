import styled from 'styled-components';

const BASE_STYLE = styled.button`
  border: 0;
  text-transform: uppercase;
  border-radius: 6px;
  font-size: 0.875rem;
  padding: 0 0.5rem;
  cursor: pointer;
`;

interface ButtonProps {
  appearance: 'text' | 'textIcon' | 'cart' | 'cart-badge';
  quantity?: number;
}

export const Container = styled(BASE_STYLE)<ButtonProps>`
  position: relative;
  transition: background-color 0.2s;

  ${(props) =>
    props.appearance === 'textIcon' &&
    `
    display: flex;
    align-items: center;    
    gap: 0.25rem;

    background-color: ${props.theme['base-button']};    
    
    height: 2rem;
    fontWeight: 400;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${props.theme['purple']};      
    }

    &:hover {
      background-color: ${props.theme['base-hover']}      
    }

    &:hover svg {
      color: ${props.theme['purple-dark']};
    }
    
  `};

  ${(props) =>
    props.appearance === 'text' &&
    `
    background-color: ${props.theme['yellow']};
    color: ${props.theme['white']};

    height: 2.875rem;
    font-weight: 700;

    &:hover {
      background-color: ${props.theme['yellow-dark']};
    }
  `};

  ${(props) =>
    props.appearance === 'cart-badge' &&
    `
    background-color: ${props.theme['yellow-light']};
    color: ${props.theme['white']};

    height: 2.375rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${props.theme['yellow-dark']};
      width: 1.375rem;
      height: 1.375rem;
    }
   
    span {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: ${props.theme['yellow-dark']};
      color: ${props.theme['white']};
      width: 20px;
      height: 20px;
      border-radius: 50%;
  
      font-size: 0.75rem;
      font-weight: bold;
  
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `};

  ${(props) =>
    props.appearance === 'cart' &&
    `
    background-color: ${props.theme['purple-dark']};
    color: ${props.theme['white']};

    height: 2.375rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${props.theme['white']};
      width: 1.375rem;
      height: 1.375rem;
    }

    &:hover {
      background-color: ${props.theme['purple']};
    }
  `};
`;
