import styled, { css } from "styled-components";

export const LineStyled = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.3;

  ${({ vertical }) =>
    vertical &&
    css`
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.black};
       @media (max-width: 768px) {
        display: none;
    }
    `}
`;
