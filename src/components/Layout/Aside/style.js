import styled from "styled-components";
import { FlexBetween } from "../../../global/GlobalStyle";

export const StyleAside = styled.aside`
    height: 100%;
    display: flex;
    align-items: stretch;
    
    @media (max-width: 768px) {
        display: none;
    }

`

export const StyleDiv = styled.div`
    ${FlexBetween}
    margin-top: 40px;
    flex-direction: column;
    gap: 16px;
    flex: 1 1 auto; 
`