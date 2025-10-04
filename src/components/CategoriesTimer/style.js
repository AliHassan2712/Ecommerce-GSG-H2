import styled from "styled-components";
import { H2, SpanStyle } from "../Typography";
import { ButtonStyled } from "../Common/Button/style";

export const StyledDiv = styled.div`
  background-color: black;
  display: flex;
  justify-content: flex-start; // keep left and right near each other
  align-items: center;
  padding: 0px 40px;
  gap: 40px; 
  flex-wrap: wrap;
  margin: 140px 0 80px 0;

  @media (max-width:767px){
      padding: 50px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1; // take available space
  min-width: 300px; // prevent shrinking too small

  @media (max-width: 1024px) {
    text-align: center;
    align-items: center;
    min-width: 100%;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; // take available space
  min-width: 300px;

 & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    filter: drop-shadow(5px 5px 55px white); 
    margin-left: -250px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;

    & img {

    margin-left: 0;
  }
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Span = styled(SpanStyle)`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
      font-size: ${({ theme }) => theme.typography.fontSizes.lg};
`;

export const H = styled(H2)`
  color: white;
  font-size: 42px;
  line-height: 1.2;
`;

export const Button = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.green};
  width: fit-content;
font-size: ${({ theme }) => theme.typography.fontSizes.md};
`;
