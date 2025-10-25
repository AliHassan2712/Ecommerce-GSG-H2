import styled from "styled-components";
import { FlexCenter } from "../../global/GlobalStyle"

export const WrapperDiVSer = styled.div`
${FlexCenter}

gap: 40px;
margin: 140px 0px ;
@media (max-width: 767px) {
    flex-direction: column;
    }

`