import styled from "styled-components";
import { ParagraphStyle } from "../Typography";

// Grid wrapper for layout
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto; 
  gap: 20px;
  width: 100%;
`;

// Each card container
export const Card = styled.div`
  position: relative;
  background-color: black;
  border-radius: 8px;
  overflow: hidden;


  ${({ big }) =>
        big &&
        `
    grid-row: 1 / 3; 
    grid-column: 1 / 2; 
  `}
  
`;

// Overlay content
export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  color: ${({ theme }) => theme.colors.white || "#fff"};
  left: 20px;
  bottom: 20px;
  width: ${({ width }) => width || "80%"};
`;

// Bottom grid with two small cards
export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

// Styled Paragraph
export const Paragraph = styled(ParagraphStyle)`
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: normal;
  width: 242px;
  color: #fafafa;
  margin: 16px 0;
`;
