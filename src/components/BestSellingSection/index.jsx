//style
import { CardsWrapper, HeaderWrapper, SectionWrapper } from "./style";
//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { CategoriesTimer } from "../CategoriesTimer";

//mock data
import { bestSellers } from "../../mocks/products";

export const BestSellingSection = () => {
  return (
    <SectionWrapper>
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

        <CategoriesTimer />
      </Container>
    </SectionWrapper>
  );
};
