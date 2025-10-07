import styled from "styled-components";
import { H2 } from "../../Typography";

export const StyleFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 20px;
  margin-top: 100px;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  a {
    display: block;
font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
font-size: ${({ theme }) => theme.typography.fontSizes.md};
    line-height: 24px;
    letter-spacing: 0;
    color: white;
    margin-bottom: 8px;
    transition: 0.3s;

 
  }

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const SubTitle = styled(H2)`
font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 12px;
`;

export const AppText = styled.p`
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  opacity: 0.8;
  margin: 5px 0 15px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;

  input {
    width: 100%;
    height: 40px;
    padding: 0 45px 0 12px;
    border-radius: 6px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    outline: none;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const SendIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
      font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  color: white;
  transition: transform 0.2s;

`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    opacity: 0.8;
    transition: 0.3s;


  }
`;

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;

  .qr img {
    border-radius: 8px;
    width: 90px;
    height: 90px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .qr img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const AppLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    position: relative;

    img {
      width: 110px;
      height: 40px;
      object-fit: cover;
      border-radius: 6px;
      transition: transform 0.2s;


    }
  }
`;
