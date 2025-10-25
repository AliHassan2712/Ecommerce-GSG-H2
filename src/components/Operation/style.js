import styled from "styled-components";
import {  FlexCenter } from "../../global/GlobalStyle"

export const OperationDiv = styled.div`
  width: 40px;
  height: 44px;
  ${FlexCenter}
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  cursor: pointer;

  border: 1px solid rgba(0, 0, 0, 0.5);

  transition:  all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ $left }) =>
        $left &&
        `
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    `}

  ${({ $right }) =>
        $right &&
        `
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    `}

  ${({ $left, $right }) =>
        !$left &&
        !$right &&
        `
      /* Remove redundant left and right borders to create a unified look */
      border-left: none;
      border-right: none;
      width: 80px; /* Give more space for the number */
      cursor: default; /* Not clickable like the operations */
    `}
`;