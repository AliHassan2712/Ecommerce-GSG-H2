//style
import { MainSectionStyled } from "./style";
//components
import { Aside } from "../Layout/Aside";
import { Container } from "../Container";
import { Slider } from "../Slider";
import { Line } from "../Common/Line";

export const MainSection = () => {
  return (
    <Container>
      <MainSectionStyled>
        <Aside />
        <Line vertical />
        <Slider />
      </MainSectionStyled>
    </Container>
  );
};