import styled from "styled-components";

export const StyleDivSer = styled.div`
background: gray;
width: 60px;
height: 60px;
border-radius: 50%;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({theme})=>theme.colors.icon};


`
export const StyleDiv = styled(StyleDivSer)`
width: 40px;
height: 40px;
color: white;
font-size: 40px;
background-color: black;
`