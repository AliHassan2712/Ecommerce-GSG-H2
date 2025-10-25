import styled from 'styled-components';
import {  FlexCenter } from "../../global/GlobalStyle"

export const DotsWrapper = styled.div`
  gap: 10px;
  ${FlexCenter}
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius:  ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ active, theme }) => (active ? theme.colors.secondary : '#777')};
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease;

`;
