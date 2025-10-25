import styled from "styled-components";

export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 1 25%;
  text-align: left !important;


  & img {
    width: 54px;
    height: 54px;
    object-fit: contain;
    background-color: ${({ theme }) => theme.colors.whiteSecondary};

  }

  & span{
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
line-height: 24px;

  }

  @media (max-width: 768px) {
    order: 1;
  }
`;