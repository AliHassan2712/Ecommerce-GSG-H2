import styled from "styled-components";
import { FlexBetween } from "../../../global/GlobalStyle";

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeaderStyle = styled.header`
  ${FlexBetween}
  padding: 40px 0 16px 0;
  position: relative;

  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }

  & li {
    margin-left: 60px;
  }

  & a {
    text-decoration: none;
    padding: 2px;
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    color: inherit;
    position: relative;
    transition: all 0.3s;
  }

  & a.active::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid ${({ theme }) => theme.colors.black};
    opacity: 0.3;
  }

  @media (max-width: 991px) {
    & ul {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin: 0;
      padding: 60px 20px 20px 20px;
      width: 280px;
      height: 100vh;
      background: ${({ theme }) => theme.colors.white};
      position: fixed;
      top: 0;
      left: 0;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      box-shadow: 4px 0 15px rgba(0, 0, 0, 0.15);
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      z-index: 101;
      overflow-y: auto;
    }

    & ul.open {
      transform: translateX(0);
    }

    & li {
      margin: 20px 0;
      border-radius: 12px;
      overflow: hidden;
    }

    & a {
      display: block;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.black};
      text-align: right; 
    }


    & ${WrapperDiv} {
      display: none;
    }
  }
`;

// Overlay
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;
