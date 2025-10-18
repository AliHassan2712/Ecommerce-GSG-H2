//style
import { CartPriceDiv } from "./style";
//components
import { Span } from "../../components/Typography";

export const CartPrice = ({ title, price }) => {
  return (
    <CartPriceDiv>
      <Span>{title}</Span>
      <Span>{price}</Span>
    </CartPriceDiv>
  );
};
