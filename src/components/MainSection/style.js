import styled from "styled-components";

export const MainSectionStyled = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between; 
  height: 370px; 
  width: 100%;
  gap: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: stretch; 
    height: auto;
    gap: 24px;
    padding: 12px 0;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;
