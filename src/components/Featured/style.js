import styled from "styled-components";
import { ParagraphStyle } from "../Typography";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto; 
  gap: 20px;
  width: 100%;

  @media (max-width: 992px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Card = styled.div`
  position: relative;
  background-color: black;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;

  ${({ big }) =>
    big &&
    `
    grid-row: 1 / 3; 
    grid-column: 1 / 2; 
  `}

  @media (max-width: 768px) {
    grid-row: auto;
    grid-column: auto;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  color: ${({ theme }) => theme.colors.white || "#fff"};
  left: 20px;
  bottom: 20px;
  width: ${({ width }) => width || "80%"};

  @media (max-width: 768px) {
    left: 16px;
    bottom: 16px;
    width: 85%;
  }

  @media (max-width: 480px) {
    left: 12px;
    bottom: 12px;
    gap: 6px;
  }
`;

export const RightTopCard = styled(Card)`
  display: flex;
  flex-direction: row-reverse; 
  align-items: center;
`;

export const RightTopOverlay = styled(Overlay)`
  width: 50%;
  padding: 0px;
  text-align: left;
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Paragraph = styled(ParagraphStyle)`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: normal;
  width: 242px;
  color: #fafafa;
  margin: 16px 0;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 13px;
    margin: 10px 0;
  }
`;
