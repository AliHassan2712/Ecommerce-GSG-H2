//style
import { CardsWrapper, CenteredWrapper, HeaderWrapper } from "./style";
//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { Line } from "../Common/Line";
//mock data
import { products } from "../../mocks/products";



export const ProductsSection = () => {
  return (
    <div style={{marginTop:"140px"}}>
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
