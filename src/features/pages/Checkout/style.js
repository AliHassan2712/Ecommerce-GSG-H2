import styled from "styled-components";
import { HStyle } from "../../../components/Typography";

export const H2 = styled(HStyle)`
font-weight: ${(props) => props.theme.typography.fontWeights.medium};
font-size: 36px;
line-height: 30px;
letter-spacing: 4%;
margin: 80px 0 48px;

`;


export const WrapperDiv = styled.div`
display: flex;
align-items: start;
justify-content: space-between;

@media (max-width: 767px) {
    flex-direction: column;
    gap: 50px 0;
}`
