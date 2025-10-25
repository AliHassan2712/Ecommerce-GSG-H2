import styled from "styled-components";
import {FlexCenter} from "../../../global/GlobalStyle"

export const CircleButtonStyled = styled.button`
width: 46px;
height: 46px;
border-radius:  ${({ theme }) => theme.borderRadius.circle};
${FlexCenter}
border: none;
cursor: pointer;
`



export const ButtonStyled = styled.button`
background-color: ${({ theme }) => theme.colors.secondary};
padding: 16px 48px;
color: ${({ theme }) => theme.colors.white};
border: none;
outline: none;
border-radius:  ${({ theme }) => theme.borderRadius.small};
cursor: pointer;
`