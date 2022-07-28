import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-top: 8rem;
`;

export const Order = styled.div`
  h2 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 900;
  }

  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }
`;
export const Details = styled.div`
  margin-top: 2.5rem;
  width: 526px;

  border-radius: 6px 36px 6px 36px;
  border: 1px solid #000;
`;
export const Item = styled.div``;
export const Icon = styled.div``;
