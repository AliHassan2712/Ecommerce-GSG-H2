//style
import { FlexDiv, Paragraph, Span, WrapperDiv } from "./style";

//components
import { Menu } from "../../Menu";
import { Container } from "../../Container";

export const TopHeader = () => {
  return (
    <WrapperDiv>
      <Container>
        <FlexDiv>
          <Span></Span>
          <Paragraph >
            summer sale for all swim suits and free express delivery - off 50%!
            <Span >ShopNow</Span>
          </Paragraph>
          <Menu />
        </FlexDiv>
      </Container>
    </WrapperDiv>
  );
};
