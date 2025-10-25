import styled from "styled-components";
import { FlexBetween } from "../../global/GlobalStyle"

export const LabelStyle = styled.div`
  width: 217px;
  height: 24px;
  ${FlexBetween}
  cursor: pointer;

    @media (max-width: 971px) {
    width: 100%;
    justify-content: space-between;
    padding: 12px;
 
  }

  & a {
    text-decoration: none;
font-size: ${({ theme }) => theme.typography.fontSizes.md};
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    color: var(--blackColor, #000);
  }

  & svg { 
    width: 7.78px;
    height: 12.73px;
  }
`;
