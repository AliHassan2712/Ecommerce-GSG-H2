//components
import { BestSellingSection } from "../../components/BestSellingSection";
import { CategorySection } from "../../components/CategorySection";
import { Container } from "../../components/Container";
import { FeaturedSection } from "../../components/FeaturedSection";
import { MainSection } from "../../components/MainSection";
import { OurProductsSection } from "../../components/OurProductsSection";
import { ProductsSection } from "../../components/ProductsSection";
import { ServiceSection } from "../../components/ServiceSection";
import { service } from "../../mocks/products";
import { WrapperDiVSer } from "./style";

export const Home = () => {
  return (
    <>
      <MainSection />
      <ProductsSection />
      <CategorySection />
      <BestSellingSection />
      <OurProductsSection />
      <FeaturedSection />

      <Container>
        <WrapperDiVSer>
          {service.map((item) => {
            return <ServiceSection {...item} />;
          })}
        </WrapperDiVSer>
      </Container>
    </>
  );
};
