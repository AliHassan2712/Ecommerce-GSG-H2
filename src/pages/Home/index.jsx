import { LineStyled } from "../../components/Common/Line/style";
import { Title } from "../../components/Common/Title";
import { SubTitle } from "../../components/Common/SubTitle";
import { Container } from "../../components/Container";
import { Aside } from "../../components/Layout/Aside";
import { Header } from "../../components/Layout/Header";
import { TopHeader } from "../../components/Layout/TopHeader";
import { MainSection } from "../../components/MainSection";

export const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <MainSection />
      <Container></Container>
    </>
  );
};
