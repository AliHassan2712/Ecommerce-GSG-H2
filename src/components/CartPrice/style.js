import styled from "styled-components";

export const CartPriceDiv = styled.div`
  display: flex;
  padding: 16px 0;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid #000;
    line-height: 24px;
    &:last-child { border-bottom: none; }
`;
