import styled from 'styled-components';

export const BannerContainer = styled.div`
  background: url('/bg-banner.jpg') no-repeat center center;
  background-size: cover;
`;
export const BannerContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  gap: 56px;
  padding: 5.875rem 0 6.75rem 0;
`;
export const BannerTitle = styled.h2`
  font-family: 'Baloo 2';
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
`;
export const BannerDescription = styled.p`
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

export const CoffeeList = styled.div`
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

export const CoffeeItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
`;
