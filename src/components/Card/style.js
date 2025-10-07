import styled from "styled-components";
import { SpanStyle } from "../Typography";

export const CardContainer = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
  background-color: #ffffff;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  position: relative;

  &:hover {
    button {
      bottom: 0;
    }
  }
`;

export const ActionIcons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  transition: opacity 0.3s ease;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray || "#F5F5F5"};
  position: relative;
  overflow: hidden;

  button {
    position: absolute;
    bottom: -50px;
    padding: 10px 24px;
    background-color: ${props => props.theme.colors.primary || "#111"};
    color: ${props => props.theme.colors.white || "#FFF"};
    width: 100%;
    border: none;
font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    cursor: pointer;
    transition: bottom 0.3s ease;
  }
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  border-radius: 6px;
  background-color: ${props =>
    props.discount ? props.theme.colors.secondary : props.theme.colors.green};
  color: ${props => props.theme.colors.white};
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
`;

export const CardBody = styled.div`
  padding: 14px 0px 18px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  
  del {
    color: ${props => props.theme.colors.black || "#000"};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    opacity: 0.5;
  }

`;

export const PriceCurrent = styled.div`
  color: ${props => props.theme.colors.secondary || "#111"};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;


`;

export const EllipseWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;


export const PriceAndRatingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px; 
`;

export const SpanCard = styled(SpanStyle)`
opacity: 0.3;
`