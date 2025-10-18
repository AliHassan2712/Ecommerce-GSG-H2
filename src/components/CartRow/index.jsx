//style
import {
  CartItemRow,
  PriceCell,
  ProductCell,
  QuantityCell,
  SubtotalCell,
} from "./style";

export const CartRow = () => {
  return (
    <CartItemRow>
      <ProductCell>
        <img src="path/to/product/image.jpg" alt="Product Name" />
        <span>Product Name</span>
      </ProductCell>
      <PriceCell>$100.00</PriceCell>
      <QuantityCell>
        <input type="number" defaultValue="01" min="1" />
      </QuantityCell>
      <SubtotalCell>$650.00</SubtotalCell>
    </CartItemRow>
  );
};
