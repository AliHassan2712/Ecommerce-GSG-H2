
//style
import { CouponGroupStyle } from "./style";
//components
import { Button } from "../Common/Button/Button";

export const CouponGroup = () => {
  return (
    <CouponGroupStyle>
      <input type="text" placeholder="Code Coupon" />
      <Button>Apply Coupon</Button>
    </CouponGroupStyle>
  );
};
