//style
import { CardsWrapper, CenteredWrapper, HeaderWrapper, SectionWrapper } from "./style";
//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";

//mock data
import { ourProducts } from "../../mocks/products";

export const OurProductsSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Title>Our Products</Title>

        <HeaderWrapper>
          <SubTitle>Explore Our Products</SubTitle>
          <NextAndPrevButton />
        </HeaderWrapper>

        <CardsWrapper>
          {ourProducts.slice(0, 8).map((prod) => (
            <Card key={prod.prodName} {...prod} />
          ))}
        </CardsWrapper>

        <CenteredWrapper>
          <Button>View All Products</Button>
        </CenteredWrapper>
      </Container>
    </SectionWrapper>
  );
};
