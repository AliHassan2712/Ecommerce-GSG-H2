//style
import { HeaderWrapper } from "./style";
//components
import { Container } from "../Container";
import { Featured } from "../Featured";
import { Title } from "../Common/Title";
import { SubTitle } from "../Common/SubTitle";

export const FeaturedSection = () => {
  return (
    <Container>
      <Title>Featured</Title>
      <HeaderWrapper>
        <SubTitle>New Arrival</SubTitle>
      </HeaderWrapper>
      <Featured />
    </Container>
  );
};
