//style
import {
  H2,
  Span,
  LoginContainer,
  LoginWrapper,
  ImageWrapper,
  ContentWrapper,
} from "./style";

//components
import { Container } from "../../../components/Container";
import { Image } from "../../../components/Common/Image";
import LoginImage from "../../../assets/imgs/Login.jpg";
import { FormLogin } from "../../components/FormLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <ImageWrapper>
        <Image src={LoginImage} widthImage="805px" heightImage="781px" />
      </ImageWrapper>

      <Container>
        <LoginWrapper>
          <ContentWrapper>
            <H2>Log in to Exclusive</H2>
            <Span>Enter your details below</Span>
            <FormLogin />
          </ContentWrapper>
        </LoginWrapper>
      </Container>
    </LoginContainer>
  );
};
