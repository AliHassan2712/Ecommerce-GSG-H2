import styled from "styled-components";
import { SpanStyle } from "../Typography";

export const StyleBox = styled.div`
width: 170px;
height: 145px;
border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
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
font-style: Regular;
font-size: ${({ theme }) => theme.typography.fontSizes.md};
line-height: 24px;
letter-spacing: 0%;
`