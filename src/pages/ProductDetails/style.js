import styled from "styled-components";
import { ParagraphStyle, SpanStyle } from "../../components/Typography";
import { StyledDiv } from "../../components/Size/style";
import { FlexBetween, FlexCenter } from "../../global/GlobalStyle"


export const DetailsSection = styled.div`
  display: flex;
  gap: 40px;
  padding: 80px 0; 

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const GallerySmall = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius:  ${({ theme }) => theme.borderRadius.small};

  @media (max-width: 992px) {
    flex-direction: row; 
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SmallImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.whiteSecondary};
  padding: 10px;
  border-radius:  ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  width: 170px;
  height: 138px;
`;

export const GalleryMain = styled.div`
  width: 500px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  ${FlexCenter}
  margin: 0px 70px 0px 30px;

  @media (max-width: 1200px) {
    width: 400px;
    height: 480px;
    margin: 0;
  }
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    min-height: 400px;
    margin: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;



export const Reviews = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Span = styled(SpanStyle)`
  opacity: 0.5;
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  margin-left: 10px;
  
  & span {
    color: ${({ theme }) => theme.colors.green};
    opacity: 0.8;
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    position: relative;
    margin-left: 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.6);
    padding-left: 10px;
  }
`;

export const Price = styled.div`
  font-size: 24px;
  letter-spacing: 3%;
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  margin-top: 16px;
`;


export const Paragraph = styled(ParagraphStyle)`
  max-width: 373px;
font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  margin-top: 16px;
  line-height: 21px;
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  letter-spacing: 3px;
  margin-top: 24px;
`;

export const OptionChoices = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 10px;
  
`;

export const BayNowDiv = styled.div`
${FlexBetween}
margin-top: 24px;
`

export const SizeStyle = styled(StyledDiv)`
width: 40px;
height: 40px;

&:hover{
background-color: transparent;
}

`

export const DeliveryDiv = styled.div`
margin-top: 40px;

`
export const LineStyleDiv = styled.div`
margin-top: 24px;
`