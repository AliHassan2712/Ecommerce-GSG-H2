import styled from "styled-components";
import {FlexBetween, FlexCenter} from "../../global/GlobalStyle"

export const SectionWrapper = styled.div`
  margin-top: 120px;

  @media (max-width: 992px) {
    margin-top: 80px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  ${FlexBetween}
  margin: 20px 0 60px;

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 0 30px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  margin-bottom: 40px;

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
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
