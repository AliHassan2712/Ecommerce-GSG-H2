import styled from 'styled-components';

export const DotsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.colors.secondary : '#777')};
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease;

`;
