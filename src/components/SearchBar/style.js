import styled from "styled-components";
import { FlexBetween } from "../../global/GlobalStyle"

export const StyleDiv = styled.div`
width: 243px;
height: 38px;
background: #F5F5F5;
padding: 5px;
${FlexBetween}

& input{
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 15px;

    &::placeholder{
            font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        color: var(--blackColor);
        opacity: 0.5;
    }
}


`