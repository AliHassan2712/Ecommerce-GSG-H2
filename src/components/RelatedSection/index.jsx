//style
import { CardsWrapper, SectionWrapper } from "./style";
//components
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Loading } from "../Loading";

//mock data
// import { products } from "../../mocks/products";

//hooks
import { useApi } from "../../hooks/useApi";

export const RelatedSection = () => {
  const transformProducts = (data) => data.products;

  const {
    data: products,
    loading,
    error,
  } = useApi("https://dummyjson.com/products?limit=6", transformProducts);

  if (error)
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        Failed to load products: {error}
      </div>
    );

  return (
    <SectionWrapper>
      <Container>
        <Title>Related Item</Title>
        <CardsWrapper>
          {loading ? (
            <Loading />
          ) : (
            products.map((prod) => <Card key={prod.prodName} {...prod} />)
          )}
        </CardsWrapper>
      </Container>
    </SectionWrapper>
  );
};
