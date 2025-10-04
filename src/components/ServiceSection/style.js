import styled from "styled-components";
import { SpanStyle } from "../Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 140px 0px;
  gap: 10px;
`;

export const Span = styled(SpanStyle)`
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-style: Regular;
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`;
