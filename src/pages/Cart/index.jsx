//style
import {
  CartContainer,
  CartTable,
  CartHeader,
  HeaderSpan,
  ButtonStyle,
  ActionButtonsWrapper,
  CheckoutSummaryWrapper,
  CouponGroup,
  CartTotalBox,
  PriceDetailsWrapper,
  CheckoutButtonWrapper,
} from "./style";

//components
import { Button } from "../../components/Common/Button/Button";
import { CartPrice } from "../../components/CartPrice";
import { H3 } from "../../components/Typography";
import { CartRow } from "../../components/CartRow";

export const Cart = () => {
  const Header = ["Product", "Price", "Quantity", "Subtotal"];
  return (
    <CartContainer>
      <CartTable>
        <CartHeader>
          {Header.map((item, index) => (
            <HeaderSpan key={index}>{item}</HeaderSpan>
          ))}
        </CartHeader>
        <CartRow />
      </CartTable>

      <ActionButtonsWrapper>
        <ButtonStyle>Return To Shop</ButtonStyle>
        <ButtonStyle>Update Cart</ButtonStyle>
      </ActionButtonsWrapper>

      <CheckoutSummaryWrapper>
        <CouponGroup>
          <input type="text" placeholder="Code Coupon" />
          <Button>Apply Coupon</Button>
        </CouponGroup>

        <CartTotalBox>
          <H3>Cart Total</H3>
          <PriceDetailsWrapper>
            <CartPrice title="Subtotal" price="$250.00" />
            <CartPrice title="Shipping" price="Free" />{" "}
            <CartPrice title="Total" price="$250.00" />
          </PriceDetailsWrapper>
          <CheckoutButtonWrapper>
            <Button>Proceed To Checkout</Button>
          </CheckoutButtonWrapper>
        </CartTotalBox>
      </CheckoutSummaryWrapper>
    </CartContainer>
  );
};
