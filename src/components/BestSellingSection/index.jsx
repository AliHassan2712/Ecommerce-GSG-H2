//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { bestSellers } from "../../mocks/products";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { Line } from "../Common/Line";
import { CardsWrapper, HeaderWrapper } from "./style";

export const BestSellingSection = () => {
  return (
    <div>
      <Container>
        <Title>This Month</Title>

        <HeaderWrapper>
          <SubTitle>Best Selling Products</SubTitle>
          <Button>View All</Button>
        </HeaderWrapper>

        <CardsWrapper>
          {bestSellers.slice(0, 4).map((prod) => (
            <Card key={prod.prodName} {...prod} />
          ))}
        </CardsWrapper>

        <Line />
      </Container>
    </div>
  );
};
