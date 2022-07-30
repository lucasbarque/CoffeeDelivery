import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
`;

export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 900;
  }

  > div > p {
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

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Item = styled.div`
  display: flex;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`;

interface IconProps {
  color: 'yellow' | 'yellow-dark' | 'purple';
}

export const Icon = styled.div<IconProps>`
  background-color: ${(props) => props.theme[props.color]};

  color: ${(props) => props.theme['white']};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
