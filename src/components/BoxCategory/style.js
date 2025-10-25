import styled from "styled-components";
import { SpanStyle } from "../Typography";
import {FlexCenter} from "../../global/GlobalStyle"


export const StyleBox = styled.div`
width: 170px;
height: 145px;
border-radius:  ${({ theme }) => theme.borderRadius.small};
border: 1px solid rgba(0, 0, 0, 0.3);
${FlexCenter}
flex-direction: column;
padding: 30px;
gap:  10px;
transition: all 0.3s;
cursor: pointer;
box-shadow: 0 1 blur rgba(0, 0, 0, 0.05);

& :nth-child(1){
    width: 56px;
    height: 56px;
}

&:hover{
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
}


`

export const SpanBox = styled(SpanStyle)`
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
line-height: 24px;
`