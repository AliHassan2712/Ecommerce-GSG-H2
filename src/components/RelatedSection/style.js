import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 140px;

  @media (max-width: 992px) {
    margin-top: 100px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
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

