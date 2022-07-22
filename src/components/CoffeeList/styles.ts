import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-bottom: 9.813rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }
`;

export const CoffeeListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
`;
