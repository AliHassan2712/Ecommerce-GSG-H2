import styled from "styled-components";
import { FlexBetween } from "../../global/GlobalStyle"
export const SectionWrapper = styled.div`
  margin-top: 140px;

  @media (max-width: 992px) {
    margin-top: 100px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
  }
`;

export const HeaderWrapper = styled.div`

  ${FlexBetween}
  margin: 20px 0 60px;

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${FlexBetween} 

  margin: 60px 0 70px;
  gap: 30px;
  text-align: center;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 10px;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none; 

    > * {
      flex: 0 0 auto;
      scroll-snap-align: start;
    }
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;
