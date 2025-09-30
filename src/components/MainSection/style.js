import styled from "styled-components";

export const MainSectionStyled = styled.div`
  display: flex;
  /* allow children (aside/slider) to stretch to the same height */
  align-items: stretch;
  justify-content: space-between; /* horizontal layout */
  height: 370px; /* parent height for vertical line */
  width: 100%;
  gap: 20px;

  /* Responsive: stack aside and slider on narrower screens */
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: stretch; /* make children take available width */
    height: auto;
    gap: 24px;
    padding: 12px 0;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;
