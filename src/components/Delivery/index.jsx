//style
import { DeliveryContainer, IconWrapper, TextWrapper } from "./style";

//components
import { H3, Span } from "../../components/Typography"; // Keeping these imports if you use them elsewhere

export const Delivery = ({ title, desc, icon: Icon }) => {
  return (
    <DeliveryContainer>
      <IconWrapper>
        <Icon />
      </IconWrapper>

      <TextWrapper>
        <H3>{title}</H3>
        <Span>{desc}</Span>
      </TextWrapper>
    </DeliveryContainer>
  );
};
