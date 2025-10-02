//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { ourProducts } from "../../mocks/products";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { Line } from "../Common/Line";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { CardsWrapper, CenteredWrapper, HeaderWrapper } from "./style";

export const OurProductsSection = () => {
  return (
    <div>
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
    </div>
  );
};
