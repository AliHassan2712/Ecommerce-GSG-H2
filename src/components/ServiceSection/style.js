import styled from "styled-components";
import { H3, SpanStyle } from "../Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
