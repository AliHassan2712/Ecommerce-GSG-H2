import styled from "styled-components";
import { ParagraphStyle, SpanStyle } from "../../Typography";

export const WrapperDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
padding: 3px;
`
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
`


export const Paragraph = styled(ParagraphStyle)`
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  text-transform: capitalize;

`


export const Span = styled(SpanStyle)`
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  text-transform: capitalize;
  text-decoration: underline;
  margin-left: 8px;

`


