import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px 6px 36px;

  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    margin-top: -1.5rem;
  }
`;
export const CoffeeTypeList = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
`;
export const CoffeeType = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  padding: 0 0.5rem;
`;
export const Title = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1rem;
`;
export const Description = styled.div`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
export const Bottom = styled.div`
  margin-top: 2.063rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;
export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;

  small {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Selector = styled.div`
  background: ${(props) => props.theme['base-button']};
  height: 38px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0 0.5rem;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple']};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Cart = styled.button`
  border: 0;
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 0 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['purple']};
  }

  svg {
    color: ${(props) => props.theme['white']};
  }
`;
