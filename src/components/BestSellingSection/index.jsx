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

//mock data
// import { bestSellers } from "../../mocks/products";

//hooks
import { useApi } from "../../hooks/useApi";

export const BestSellingSection = () => {
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
              .slice(0, 4)
              .map((prod) => <Card key={prod.prodName} {...prod} />)
          )}
        </CardsWrapper>

        <CategoriesTimer />
      </Container>
    </SectionWrapper>
  );
};
