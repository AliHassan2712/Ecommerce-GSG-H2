import styled from "styled-components";
import { H2, SpanStyle } from "../Typography";
import { ButtonStyled } from "../Common/Button/style";

export const StyledDiv = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px;
  gap: 40px;
  flex-wrap: wrap;
  margin: 140px 0 80px 0;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 60px 20px;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 80px 0 60px 0;
    padding: 40px 16px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  min-width: 300px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 300px;

  & img {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: 20px;
    filter: drop-shadow(5px 5px 75px rgba(255, 255, 255, 0.5));
    margin-left: -150px;
    transition: all 0.3s ease;
  }

  @media (max-width: 1200px) {
    & img {
      margin-left: -80px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
    & img {
      margin-left: 0;
      max-width: 400px;
    }
  }

  @media (max-width: 600px) {
    & img {
      max-width: 300px;
    }
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 12px;
  }
`;

export const Span = styled(SpanStyle)`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
  }
`;

export const H = styled(H2)`
  color: white;
  font-size: 42px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const Button = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.green};
  width: fit-content;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};

  @media (max-width: 1024px) {
    align-self: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 260px;
  }
`;
