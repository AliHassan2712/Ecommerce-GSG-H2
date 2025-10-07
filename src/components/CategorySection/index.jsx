//style
import { CategoriesWrapper, HeaderWrapper, SectionWrapper } from "./style";
//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { BoxCategory } from "../BoxCategory";
import { Container } from "../Container";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { Line } from "../Common/Line";
//mock data
import { categories } from "../../mocks/products";

export const CategorySection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Title>Categories</Title>

        <HeaderWrapper>
          <SubTitle>Browse By Category</SubTitle>
          <NextAndPrevButton />
        </HeaderWrapper>

        <CategoriesWrapper>
          {categories.map((cat) => (
            <BoxCategory key={cat.category} {...cat} />
          ))}
        </CategoriesWrapper>

        <Line />
      </Container>
    </SectionWrapper>
  );
};
