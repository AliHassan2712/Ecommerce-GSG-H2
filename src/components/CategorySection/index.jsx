//components
import { SubTitle } from "../Common/SubTitle";
import { Title } from "../Common/Title";
import { categories } from "../../mocks/products";
import { BoxCategory } from "../BoxCategory";
import { Container } from "../Container";
import { NextAndPrevButton } from "../Common/NextAndPrevButton";
import { Line } from "../Common/Line";
import { CategoriesWrapper, HeaderWrapper } from "./style";

export const CategorySection = () => {
  return (
    <div>
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
    </div>
  );
};
