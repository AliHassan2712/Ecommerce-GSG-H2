//style
import { CardsWrapper,  SectionWrapper } from "./style";
//components
import { Title } from "../Common/Title";
import { Card } from "../Card";
import { Container } from "../Container";

//mock data
import { products } from "../../mocks/products";

export const RelatedSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Title>Related Item</Title>
        <CardsWrapper>
          {products.map((prod) => (
            <Card key={prod.prodName} {...prod} />
          ))}
        </CardsWrapper>
      </Container>
    </SectionWrapper>
  );
};
