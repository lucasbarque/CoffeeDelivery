import styled from 'styled-components';

export const Container = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 2rem 0;
  background-color: ${(props) => props.theme['background']};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};
  height: 38px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0 8px;
`;

export const Cart = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: 0;
  width: 38px;
  height: 38px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
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
