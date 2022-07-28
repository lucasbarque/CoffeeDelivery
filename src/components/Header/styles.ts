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
