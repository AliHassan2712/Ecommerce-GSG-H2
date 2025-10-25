import styled from "styled-components";

export const StyleTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0px 20px;
  left: 30px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  margin-top: 100px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius:  ${({ theme }) => theme.borderRadius.small};
    left: -30px;
  }
`;
