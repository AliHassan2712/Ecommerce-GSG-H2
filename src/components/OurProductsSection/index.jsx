//style
import {
  CardsWrapper,
  CenteredWrapper,
  HeaderWrapper,
  SectionWrapper,
} from "./style";
//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { Loading } from "../Loading";

//mock data
// import { ourProducts } from "../../mocks/products";

//hooks
import { useApi } from "../../hooks/useApi";

export const OurProductsSection = () => {
  const transformProducts = (data) => data.products;

  const {
    data: products,
    loading,
    error,
  } = useApi("https://dummyjson.com/products?limit=8", transformProducts);

  if (error)
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        Failed to load products: {error}
      </div>
    );

  return (
    <SectionWrapper>
      <Container>
        <Title>Our Products</Title>

        <HeaderWrapper>
          <SubTitle>Explore Our Products</SubTitle>
          <NextAndPrevButton />
        </HeaderWrapper>

        <CardsWrapper>
          {loading ? (
            <Loading />
          ) : (
            products.map((prod) => <Card key={prod.prodName} {...prod} />)
          )}
        </CardsWrapper>

        <CenteredWrapper>
          <Button>View All Products</Button>
        </CenteredWrapper>
      </Container>
    </SectionWrapper>
  );
};
