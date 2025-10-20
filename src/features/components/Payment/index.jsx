import { CartInfoProduct } from "../../../components/CartInfoProduct";
import { CartPrice } from "../../../components/CartPrice";
import { CouponGroup } from "../../../components/CouponGroup";
import { Button } from "../../../components/Common/Button/Button";
import { Image } from "../../../components/Common/Image";
import { Span } from "../../../components/Typography";

import VisaCard from "../../../assets/imgs/VisaCard.png";

import {
  PaymentWrapper,
  ProductList,
  ProductItem,
  PriceDetailsWrapper,
  PaymentOption,
  PaymentOptionLabel,
  VisaImageGroup,
  OrderButtonWrapper,
} from "./style";

export const Payment = () => {
  return (
    <PaymentWrapper>
      <ProductList>
        <ProductItem>
          <CartInfoProduct />
          <Span>$100</Span>
        </ProductItem>
        <ProductItem>
          <CartInfoProduct />
          <Span>$100</Span>
        </ProductItem>

        <PriceDetailsWrapper>
          <CartPrice title="Subtotal" price="$250.00" />
          <CartPrice title="Shipping" price="Free" />
          <CartPrice title="Total" price="$250.00" />
        </PriceDetailsWrapper>

        {/* Payment Options */}
        <PaymentOption>
          <div>
            <input type="radio" name="payment" id="bank" />
            <PaymentOptionLabel htmlFor="bank">Bank</PaymentOptionLabel>
          </div>
          <VisaImageGroup>
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={VisaCard}
                alt="Visa Card"
                widthImage="30px"
                heightImage="20px"
              />
            ))}
          </VisaImageGroup>
        </PaymentOption>

        <PaymentOption>
          <div>
            <input type="radio" name="payment" id="cod" />
            <PaymentOptionLabel htmlFor="cod">
              Cash on Delivery
            </PaymentOptionLabel>
          </div>
        </PaymentOption>
      </ProductList>

      <CouponGroup />

      <OrderButtonWrapper>
        <Button>Place Order</Button>
      </OrderButtonWrapper>
    </PaymentWrapper>
  );
};
