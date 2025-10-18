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
  //  const { data: categories, loading, error } = useApi(
  //   "https://dummyjson.com/products/categories",
  //   // transform data to match your component props
  //   (json) =>
  //     json.map((cat) => ({
  //       category: cat.name,
  //       icon: CiFolderOn, // you can map specific icons per category if you want
  //     }))
  // );

  // if (loading) return <p>Loading categories...</p>;
  // if (error) return <p>Error: {error}</p>;

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
