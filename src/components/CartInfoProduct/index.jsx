//style
import { ProductCell } from "./style";

export const CartInfoProduct = ({ title, image }) => {
  return (
    <ProductCell>
      <img src={image} alt={title} width={80} height={80} />
      <span>{title}</span>
    </ProductCell>
  );
};
