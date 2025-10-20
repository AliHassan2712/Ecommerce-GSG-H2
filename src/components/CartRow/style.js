import styled from "styled-components";
import { Row } from "../../pages/Cart/style";

export const CartItemRow = styled(Row)`
  background-color: ${({ theme }) => theme.colors.white};
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;



export const PriceCell = styled.span`
  flex: 1 1 25%;


  @media (max-width: 768px) {
    order: 3;
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  }
`;

export const QuantityCell = styled.div`
  flex: 1 1 25%;


  
  @media (max-width: 768px) {
    order: 2;
  }

  & input {
    width: 60px;
    height: 40px;
    padding: 0 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    text-align: center;
  }
`;

export const SubtotalCell = styled.div`
  flex: 1 1 25%;
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};

  @media (max-width: 768px) {
    order: 4;
  }
`;

