import styled from "styled-components";
import { FlexBetween } from "../../../global/GlobalStyle"

export const PaymentOption = styled.div`
  ${FlexBetween}
  margin-top: 16px;

  & div{
    display: flex;
    align-items: center;
  }

  input[type="radio"] {
    accent-color: ${(props) => props.theme.colors.black};
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;

export const PaymentOptionLabel = styled.label`
  margin-left: 8px;
  color: rgba(0, 0, 0, );
  cursor: pointer;


`;

export const VisaImageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;