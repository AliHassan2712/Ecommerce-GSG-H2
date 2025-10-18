import styled from "styled-components";


export const DeliveryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  width: 100%;
  
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0;


  &:first-child {
    border-radius: 8px 8px 0 0;
    & span{
        text-decoration: underline;
    }
}

&:last-child {
    border-top: 0;
  border-radius: 0 0 8px 8px;
}
`;

export const IconWrapper = styled.div`
  & svg {
    width: 40px;
    height: 40px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  & h3 {
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
font-style: Medium;
font-size: ${({ theme }) => theme.typography.fontSizes.md};
line-height: 24px;

  }

  & span {
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
font-style: Medium;
font-size: ${({ theme }) => theme.typography.fontSizes.xs};
line-height: 18px;
  }
`;

