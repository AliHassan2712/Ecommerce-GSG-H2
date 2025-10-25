import styled from "styled-components";
import {  FlexCenter } from "../../global/GlobalStyle"

export const StyledDiv = styled.div`
width: 32px;
height: 32px;
border-radius:  ${({ theme }) => theme.borderRadius.small};
border: 1px solid rgba(0, 0, 0, .5);
${FlexCenter}
font-size: ${({ theme }) => theme.typography.fontSizes.sm};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
transition:  all 0.3s;
cursor: pointer;



&:hover{
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
}


`