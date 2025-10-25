//style
import { CardsWrapper, HeaderWrapper, SectionWrapper } from "./style";

//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";
import { Button } from "../Common/Button/Button";
import { CategoriesTimer } from "../CategoriesTimer";
import { Loading } from "../Loading";
import { ErrorFetch } from "../Error";

//mock data
// import { bestSellers } from "../../mocks/products";

//hooks
import { useApi } from "../../hooks/useApi";



export const BestSellingSection = () => {
  const transformProducts = (data) => data.products;
  const API_URL = import.meta.env.VITE_API_URL;
  
  const {
    data: products,
    loading,
    error,
  } = useApi(`${API_URL}/products?limit=8`, transformProducts);

  if (error) return <ErrorFetch error={error} />;

  return (
    <SectionWrapper>
      <Container>
        <Title>This Month</Title>

        <HeaderWrapper>
          <SubTitle>Best Selling Products</SubTitle>
          <Button>View All</Button>
        </HeaderWrapper>

        <CardsWrapper>
          {loading ? (
            <Loading />
          ) : (
            products
              .slice(4, 8)
              .map((prod) => <Card key={prod.prodName} {...prod} />)
          )}
        </CardsWrapper>

        <CategoriesTimer />
      </Container>
    </SectionWrapper>
  );
};
