import styled from "styled-components";
import {FlexBetween, FlexCenter} from "../../global/GlobalStyle"

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
  width: 100%;
  ${FlexBetween}
  margin-top: 24px;

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 0 30px;
  margin: 20px 0 31px 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 576px) {
    gap: 12px;
  }
`;

export const CenteredWrapper = styled.div`
  width: 100%;
  ${FlexCenter}
  margin: 60px 0;

  @media (max-width: 768px) {
    margin: 40px 0;
  }

  @media (max-width: 576px) {
    margin: 30px 0;
  }
`;
