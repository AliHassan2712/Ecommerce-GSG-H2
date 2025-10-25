import styled from "styled-components";
import {FlexBetween} from "../../global/GlobalStyle"

export const CartPriceDiv = styled.div`
  padding: 16px 0;
  ${FlexBetween}
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #000;
  line-height: 24px;
  &:last-child { border-bottom: none; }
`;
