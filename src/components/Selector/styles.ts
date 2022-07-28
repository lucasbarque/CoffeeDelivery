import styled from 'styled-components';

export const Container = styled.div`
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
