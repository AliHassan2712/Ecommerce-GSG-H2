import styled from "styled-components";
import { FlexBetween } from "../../../global/GlobalStyle"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  gap: 40px 0;
`;

export const StyledInput = styled.input`
  width: 370px;
  height: 32px;
  gap: 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 100%; 
  max-width: 370px; 

  &::placeholder {
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};;
line-height: 24px;

    opacity: 0.4;
  }
`;

export const LoginButton = styled.div`
  ${FlexBetween}
  width: 100%;
  margin-top: 40px;

  & a {
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};;
    line-height: 24px;
    color:${({ theme }) => theme.colors.secondary}
  }
  
`;