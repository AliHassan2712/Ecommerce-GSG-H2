import styled from "styled-components";
import { FlexCenter } from "../../global/GlobalStyle"

export const StyleDivSer = styled.div`
background: gray;
width: 60px;
height: 60px;
border-radius:  ${({ theme }) => theme.borderRadius.circle};
padding: 5px;
${FlexCenter}
background-color: ${({theme})=>theme.colors.icon};


`
export const StyleDiv = styled(StyleDivSer)`
width: 40px;
height: 40px;
color: white;
font-size: 40px;
background-color: black;
`