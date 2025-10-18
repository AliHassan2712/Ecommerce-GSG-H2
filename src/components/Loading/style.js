import styled, { keyframes } from "styled-components";

// Spinner rotation animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.whiteSecondary};
  border-top: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 12px;
`;

export const Text = styled.span`
  color: #555;
  font-size: 1rem;
  font-weight: 500;
`;
