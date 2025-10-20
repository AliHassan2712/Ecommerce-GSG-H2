//style
import { CartItemRow, PriceCell, QuantityCell, SubtotalCell } from "./style";
//components
import { CartInfoProduct } from "../CartInfoProduct";

export const CartRow = ({ product }) => {
  return (
    <CartItemRow>
      <CartInfoProduct title={product.title} image={product.thumbnail} />
      <PriceCell>${product.price.toFixed(2)}</PriceCell>
      <QuantityCell>
        <input type="number" defaultValue={product.quantity} min="1" />
      </QuantityCell>
      <SubtotalCell>${product.total.toFixed(2)}</SubtotalCell>
    </CartItemRow>
  );
};
