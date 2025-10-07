import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 60px;

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
  }
`;
