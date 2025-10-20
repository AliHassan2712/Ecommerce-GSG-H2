import { Button } from "../Common/Button/Button";
import { CouponGroupStyle } from "./style";

export const CouponGroup = () => {
  return (
    <CouponGroupStyle>
      <input type="text" placeholder="Code Coupon" />
      <Button>Apply Coupon</Button>
    </CouponGroupStyle>
  );
};
