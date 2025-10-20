import styled from "styled-components";
import { ButtonStyled } from "../../components/Common/Button/style"; // Assuming this is your base button style


export const CartContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
`;

export const CartTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px 0px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;


  & > * {
    flex: 1 1 25%;
    text-align: center;

    @media (max-width: 768px) {
        flex: 1 1 100%;
        text-align: left;
    }
  }
`;


export const CartHeader = styled(Row)`
  background-color: white;
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderSpan = styled.span`
  &:first-child {
    text-align: left;
  }
`;
export const CartItemRow = styled(Row)`
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 1 25%;
  text-align: left !important;

  & img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    background-color: #f5f5f5;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const PriceCell = styled.span`
  flex: 1 1 25%;

  @media (max-width: 768px) {
    order: 3;
    font-weight: 500;
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
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
`;

export const SubtotalCell = styled.div`
  flex: 1 1 25%;
  font-weight: 500;

  @media (max-width: 768px) {
    order: 4;
  }
`;



export const ButtonStyle = styled(ButtonStyled)`
    background-color: transparent;
    color: black;
    border: 0.5px solid black;
    padding: 16px 48px; 
    
    @media (max-width: 576px) {
        width: 100%;
        padding: 12px 20px;
    }
`;



export const ActionButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    gap: 16px; 

    @media (max-width: 768px) {
        
        ${ButtonStyle} {
            width: 50%;
        }
    }
`;

export const CheckoutSummaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    margin-top: 80px; 
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const CartTotalBox = styled.div`
    border: 2px solid rgba(0, 0, 0, 1);
    border-radius: 4px;
    padding: 32px 24px;
    min-width: 470px;    

    & h3 {
        margin-bottom: 24px;
    }

    @media (max-width: 768px) {
        min-width: 0;
        width: 100%;
    }
`;

export const PriceDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const CheckoutButtonWrapper = styled.div`
    margin-top: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
  
`;