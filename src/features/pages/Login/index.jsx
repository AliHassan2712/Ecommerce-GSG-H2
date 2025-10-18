//react
import { Link } from "react-router-dom";
//style
import {
  H2,
  LoginButton,
  Span,
  StyledForm,
  StyledInput,
  LoginContainer,
  LoginWrapper,
  ImageWrapper,
  ContentWrapper,
} from "./style";

//components
import { Container } from "../../../components/Container";
import { Image } from "../../../components/Common/Image";
import { Button } from "../../../components/Common/Button/Button";

//assets
import LoginImage from "../../../assets/imgs/Login.jpg";

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

            <StyledForm>
              <StyledInput type="text" placeholder="Email or Phone Number" />
              <StyledInput type="password" placeholder="Password" />

              <LoginButton>
                <Button>Log In</Button>
                <Link to="#">Forget Password?</Link>
              </LoginButton>
            </StyledForm>
          </ContentWrapper>
        </LoginWrapper>
      </Container>
    </LoginContainer>
  );
};
