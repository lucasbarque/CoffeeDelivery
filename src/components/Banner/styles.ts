import styled from 'styled-components';

export const Container = styled.div`
  background: url('/src/assets/bg-banner.jpg') no-repeat center center;
  background-size: cover;
`;
export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  gap: 56px;
  padding: 5.875rem 0 6.75rem 0;
`;
export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
`;
export const Description = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 130%; ;
`;

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`;

const BENEFIT_ITEM_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const;

interface BenefitItemProps {
  color: keyof typeof BENEFIT_ITEM_COLORS;
}

export const BenefitItem = styled.div<BenefitItemProps>`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  color: ${(props) => props.theme['base-text']};

  span {
    width: 32px;
    height: 32px;

    background-color: ${(props) =>
      props.theme[BENEFIT_ITEM_COLORS[props.color]]};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['white']};
  }
`;
