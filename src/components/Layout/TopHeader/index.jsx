//style
import { FlexDiv, WrapperDiv } from "./style";

//components
import { Menu } from "../../Menu";
import { Paragraph, Span } from "../../Typography";
import { Container } from "../../Container";

export const TopHeader = () => {
  return (
    <WrapperDiv>
      <Container>
        <FlexDiv>
          <Span></Span>
          <Paragraph TopHeader="14px">
            summer sale for all swim suits and free express delivery - off 50%!
            <Span TopHeader>ShopNow</Span>
          </Paragraph>
          <Menu />
        </FlexDiv>
      </Container>
    </WrapperDiv>
  );
};
