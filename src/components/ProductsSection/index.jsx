// style
import {
  CardsWrapper,
  CenteredWrapper,
  HeaderWrapper,
  SectionWrapper,
} from "./style";

// components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { Line } from "../Common/Line";
import { Loading } from "../Loading";

// hooks
import { useApi } from "../../hooks/useApi";


export const ProductsSection = () => {
  const transformProducts = (data) => data.products;

  const { data: products, loading, error } = useApi(
    "https://dummyjson.com/products?limit=6",
    transformProducts
  );

  if (error)
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        Failed to load products: {error}
      </div>
    );

  return (
    <SectionWrapper>
      <Container>
        <Title>Today's</Title>

        <HeaderWrapper>
          <SubTitle>Flash Sales</SubTitle>
          <NextAndPrevButton />
        </HeaderWrapper>

        <CardsWrapper>
          {loading ? (
            <Loading text="Fetching products..." />
          ) : (
            products.map((prod) => <Card key={prod.id} {...prod} ellipse={false} />)
          )}
        </CardsWrapper>

        <CenteredWrapper>
          <Button>View All Products</Button>
        </CenteredWrapper>

        <Line />
      </Container>
    </SectionWrapper>
  );
};
