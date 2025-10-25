import styled from "styled-components";
import {  FlexCenter } from "../../global/GlobalStyle"

export const StyleTimer = styled.div`
width: 62px;
height: 62px;
border-radius:  ${({ theme }) => theme.borderRadius.circle};
${FlexCenter}
flex-direction: column;

background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.black};

& span:nth-child(1){
font-size: ${({ theme }) => theme.typography.fontSizes.md};
font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
}

& span:nth-child(2){
    font-size: 11px;
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
}
`