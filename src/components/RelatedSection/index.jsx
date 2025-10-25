//style
import { CardsWrapper, SectionWrapper } from "./style";
//components
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Loading } from "../Loading";
import { ErrorFetch } from "../Error";

//mock data
// import { products } from "../../mocks/products";

//hooks
import { useApi } from "../../hooks/useApi";

export const RelatedSection = () => {
  const transformProducts = (data) => data.products;
const API_URL = import.meta.env.VITE_API_URL;

  const {
    data: products,
    loading,
    error,
  } = useApi(`${API_URL}/products?limit=6`, transformProducts);

  if (error) return <ErrorFetch error={error} />;

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
