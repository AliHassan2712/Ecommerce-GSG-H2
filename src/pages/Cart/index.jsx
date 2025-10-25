//style
import {
  CartContainer,
  CartTable,
  CartHeader,
  HeaderSpan,
  ButtonStyle,
  ActionButtonsWrapper,
  CheckoutSummaryWrapper,
  CartTotalBox,
  PriceDetailsWrapper,
  CheckoutButtonWrapper,
} from "./style";

//components
import { Button } from "../../components/Common/Button/Button";
import { CartPrice } from "../../components/CartPrice";
import { H3 } from "../../components/Typography";
import { CartRow } from "../../components/CartRow";
import { CouponGroup } from "../../components/CouponGroup";
import BasicBreadcrumbs from "../../components/Common/Breadcrumbs";
import { ErrorFetch } from "../../components/Error";
import { Loading } from "../../components/Loading";

//hooks
import { useApi } from "../../hooks/useApi";
export const Cart = () => {
  const Header = ["Product", "Price", "Quantity", "Subtotal"];
  const userId = localStorage.getItem("userId");

  // Fetch user cart data
  const { data, loading, error } = useApi(
    `https://dummyjson.com/carts/user/${userId}`,
    (json) => json.carts
  );

  if (loading) return <Loading />;
  if (error) return <ErrorFetch error={error} />;
  if (!data?.length) return <ErrorFetch error="No carts found" />;

  const cart = data[0];
  const { products, total, discountedTotal } = cart;

  return (
    <CartContainer>
      <BasicBreadcrumbs
        pages={[
          { title: "Home", url: "/" },
          { title: "Cart", url: "/cart" },
        ]}
      />

      <CartTable>
        <CartHeader>
          {Header.map((item, index) => (
            <HeaderSpan key={index}>{item}</HeaderSpan>
          ))}
        </CartHeader>

        {products.map((product) => (
          <CartRow key={product.id} product={product} />
        ))}
      </CartTable>

      <ActionButtonsWrapper>
        <ButtonStyle>Return To Shop</ButtonStyle>
        <ButtonStyle>Update Cart</ButtonStyle>
      </ActionButtonsWrapper>

      <CheckoutSummaryWrapper>
        <CouponGroup />
        <CartTotalBox>
          <H3>Cart Total</H3>
          <PriceDetailsWrapper>
            <CartPrice title="Subtotal" price={`$${total.toFixed(2)}`} />
            <CartPrice title="Shipping" price="Free" />
            <CartPrice
              title="Total (After Discount)"
              price={`$${discountedTotal.toFixed(2)}`}
            />
          </PriceDetailsWrapper>
          <CheckoutButtonWrapper>
            <Button>Proceed To Checkout</Button>
          </CheckoutButtonWrapper>
        </CartTotalBox>
      </CheckoutSummaryWrapper>
    </CartContainer>
  );
};
