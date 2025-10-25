import styled from "styled-components";
import { H3, SpanStyle } from "../Typography";
import { FlexCenter } from "../../global/GlobalStyle"

export const Wrapper = styled.div`
  flex-direction: column;
  ${FlexCenter}
  gap: 10px;

`;

export const Span = styled(SpanStyle)`
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-style: Regular;
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
text-transform: capitalize;

`;

export const HStyle = styled(H3)`
text-transform: uppercase;
`
