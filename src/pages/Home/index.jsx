import { BestSellingSection } from "../../components/BestSellingSection";
import { BoxCategory } from "../../components/BoxCategory";
import { CategorySection } from "../../components/CategorySection";
import { Container } from "../../components/Container";
import { Header } from "../../components/Layout/Header";
import { TopHeader } from "../../components/Layout/TopHeader";
import { MainSection } from "../../components/MainSection";
import { OurProductsSection } from "../../components/OurProductsSection";
import { ProductsSection } from "../../components/ProductsSection";

export const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <MainSection />
      <ProductsSection />
      <CategorySection/>
      <BestSellingSection/>
      <OurProductsSection/>
    </>
  );
};
