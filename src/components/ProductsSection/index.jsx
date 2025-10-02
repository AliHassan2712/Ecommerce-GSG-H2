//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { products } from "../../mocks/products";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { Line } from "../Common/Line";
import { CardsWrapper, CenteredWrapper, HeaderWrapper } from "./style";



export const ProductsSection = () => {
  return (
    <div>
      <Container>
        <Title>Today's</Title>

        <HeaderWrapper>
          <SubTitle>Flash Sales</SubTitle>
          <NextAndPrevButton />
        </HeaderWrapper>

        <CardsWrapper>
          {products.map((prod) => (
            <Card key={prod.prodName} {...prod} />
          ))}
        </CardsWrapper>

        <CenteredWrapper>
          <Button>View All Products</Button>
        </CenteredWrapper>

        <Line />
      </Container>
    </div>
  );
};
