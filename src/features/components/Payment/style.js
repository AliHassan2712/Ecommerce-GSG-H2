import styled from "styled-components";

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 420px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const PriceDetailsWrapper = styled.div`
  margin-top: 16px;
  padding-top: 12px;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  input[type="radio"] {
    accent-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const PaymentOptionLabel = styled.label`
  margin-left: 8px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const VisaImageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OrderButtonWrapper = styled.div`
  margin-top: 20px;
`;
