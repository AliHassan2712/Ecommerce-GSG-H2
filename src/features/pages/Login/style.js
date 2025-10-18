import styled from "styled-components";
import { SpanStyle } from "../../../components/Typography";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:60px 0px 140px ;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    padding: 0;
    justify-content: flex-start;
  }
`;


export const ImageWrapper = styled.div`
width:805px ;
height:781px ;
background-color: ${({ theme }) => theme.colors.bluesky};
;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
  display: block; 
  @media (max-width: 992px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
`;


export const H2 = styled.h2`

font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
font-size: 36px;
line-height: 30px;
letter-spacing: 4px;

  @media (max-width: 576px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

export const Span = styled(SpanStyle)`
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};;
line-height: 24px;
  padding-top: 24px;
  display: inline-block;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  gap: 40px 0;
`;

export const StyledInput = styled.input`
  width: 370px;
  height: 32px;
  gap: 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;

  width: 100%; 
  max-width: 370px; 

  &::placeholder {
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};;
line-height: 24px;

    opacity: 0.4;
  }
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;

  & a {
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};;
    line-height: 24px;
    color:${({ theme }) => theme.colors.secondary}
  }
  
`;