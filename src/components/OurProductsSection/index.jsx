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
import {ErrorFetch} from "../Error"
//mock data
// import { ourProducts } from "../../mocks/products";

//hooks
import { useApi } from "../../hooks/useApi";



export const OurProductsSection = () => {
  const transformProducts = (data) => data.products;
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    data: products,
    loading,
    error,
  } = useApi(`${API_URL}/products?limit=8`, transformProducts);

  if (error)
    return (
      <ErrorFetch error={error}/>
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
