import styled from "styled-components";
import { FlexBetween } from "../../global/GlobalStyle"

export const HeaderWrapper = styled.div`
  width: 100%;
  ${FlexBetween}
  margin: 20px 0 60px;

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
  }
`;
