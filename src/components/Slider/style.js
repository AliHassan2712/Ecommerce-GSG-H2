// src/components/Slider/style.js
import styled from "styled-components";
import { Span, H2 } from "../Typography";

export const SliderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  margin-top: 40px;
  padding: 28px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 1 40%;

  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const SubTitle = styled(Span)`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white}; 
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

export const Title = styled(H2)`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  margin-top: 20px;
  max-width: 280px;

  @media (max-width: 992px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ShopNow = styled(Span)`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme }) => theme.colors.white}; 
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;


  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  }
`;

export const PaginationWrap = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightImage = styled.div`
  flex: 1 1 55%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;