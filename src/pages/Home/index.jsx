//components
import { BestSellingSection } from "../../components/BestSellingSection";
import { CategorySection } from "../../components/CategorySection";
import { Container } from "../../components/Container";
import { FeaturedSection } from "../../components/FeaturedSection";
import { Footer } from "../../components/Layout/Footer";
import { Header } from "../../components/Layout/Header";
import { TopHeader } from "../../components/Layout/TopHeader";
import { MainSection } from "../../components/MainSection";
import { OurProductsSection } from "../../components/OurProductsSection";
import { ProductsSection } from "../../components/ProductsSection";
import { ServiceSection } from "../../components/ServiceSection";
import { service } from "../../mocks/products";

export const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <MainSection />
      <ProductsSection />
      <CategorySection />
      <BestSellingSection />
      <OurProductsSection />
      <FeaturedSection />

      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {service.map((item) => {
            return <ServiceSection {...item} />;
          })}
        </div>
      </Container>
      <Footer/>
    </>
  );
};
