//style
import {
  PaymentWrapper,
  ProductList,
  ProductItem,
  PriceDetailsWrapper,
  OrderButtonWrapper,
  StyleDiv,
} from "./style";

//components
import { CartInfoProduct } from "../../../components/CartInfoProduct";
import { CartPrice } from "../../../components/CartPrice";
import { CouponGroup } from "../../../components/CouponGroup";
import { Button } from "../../../components/Common/Button/Button";
import { Span } from "../../../components/Typography";
import { PaymentOpt } from "../PaymentOption";

export const Payment = () => {
  return (
    <PaymentWrapper>
      <StyleDiv>
        <ProductList>
          <ProductItem>
            <CartInfoProduct title="" />
            <Span>$100</Span>
          </ProductItem>

          <PriceDetailsWrapper>
            <CartPrice title="Subtotal" price="$250.00" />
            <CartPrice title="Shipping" price="Free" />
            <CartPrice title="Total" price="$250.00" />
          </PriceDetailsWrapper>

          {/* Payment Options */}
          <PaymentOpt />
        </ProductList>
      </StyleDiv>

      <CouponGroup />

      <OrderButtonWrapper>
        <Button>Place Order</Button>
      </OrderButtonWrapper>
    </PaymentWrapper>
  );
};
