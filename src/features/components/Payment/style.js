import styled from "styled-components";
import { FlexBetween } from "../../../global/GlobalStyle"

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyleDiv = styled.div`
max-width: 422px;
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductItem = styled.div`
  ${FlexBetween}
  margin: 10px 0;

  @media (max-width: 767px) {
      display: flex;
  flex-direction: row-reverse;
  align-items: center;
  }

`;

export const PriceDetailsWrapper = styled.div`
  margin-top: 16px;
  padding-top: 12px;
`;


export const OrderButtonWrapper = styled.div`
  margin-top: 20px;
`;
