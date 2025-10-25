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
import { ErrorFetch } from "../Error";

// hooks
import { useApi } from "../../hooks/useApi";


export const ProductsSection = () => {
  const transformProducts = (data) => data.products;
  const API_URL = import.meta.env.VITE_API_URL;


  const { data: products, loading, error } = useApi(
    `${API_URL}/products?limit=6`,
    transformProducts
  );

  if (error)
    return (
     <ErrorFetch error={error}/>
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
