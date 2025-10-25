import styled from "styled-components";
import { ButtonStyled } from "../Common/Button/style";

export const CouponGroupStyle = styled.div`
    display: flex;
    gap: 16px;
    
    & input {
        padding: 16px 24px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius:  ${({ theme }) => theme.borderRadius.small};
        min-width: 300px;
        
        @media (max-width: 576px) {
            min-width: 0;
            flex-grow: 1; 
    }

    & ${ButtonStyled} {
        padding: 16px 48px;
        
        @media (max-width: 576px) {
            padding: 12px 24px;
        }
    }

    @media (max-width: 576px) {
        width: 100%;
    }
  }
`;