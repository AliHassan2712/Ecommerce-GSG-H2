//style
import { GridWrapper, Card, Overlay, BottomGrid, RightTopCard, RightTopOverlay } from "./style";
//components
import { Image } from "../Common/Image";
import { H2, Paragraph, Span } from "../Typography";
//mock data
import { featuredData } from "../../mocks/products";

export const Featured = () => {
  const topRightCards = featuredData.slice(1, 2);
  const bottomRightCards = featuredData.slice(2);

  return (
    <GridWrapper>
      {/* Left big card */}
      <Card big={featuredData[0].big}>
        <Image
          src={featuredData[0].image}
          widthImage="100%"
          heightImage="100%"
        />
        <Overlay width={featuredData[0].overlayWidth}>
          <H2>{featuredData[0].title}</H2>
          <Paragraph>{featuredData[0].description}</Paragraph>
          <Span>Shop Now</Span>
        </Overlay>
      </Card>

      {/* Right top card */}
      {topRightCards.map((item) => (
        <RightTopCard key={item.id}>
          <Image
            src={item.image}
            widthImage="50%"
            heightImage="200px"
          />
          <RightTopOverlay>
            <H2>{item.title}</H2>
            <Paragraph>{item.description}</Paragraph>
            <Span>Shop Now</Span>
          </RightTopOverlay>
        </RightTopCard>
      ))}

      {/* Right bottom cards */}
      <BottomGrid>
        {bottomRightCards.map((item) => (
          <Card key={item.id}>
            <Image src={item.image} widthImage="100%" heightImage="200px" />
            <Overlay width={item.overlayWidth}>
              <H2>{item.title}</H2>
              <Paragraph>{item.description}</Paragraph>
              <Span>Shop Now</Span>
            </Overlay>
          </Card>
        ))}
      </BottomGrid>
    </GridWrapper>
  );
};
