//style
import { PaymentOption, PaymentOptionLabel, VisaImageGroup } from "./style";

//components
import { Image } from "../../../components/Common/Image";

//assets
import VisaCard from "../../../assets/imgs/VisaCard.png";
import MasterCard from "../../../assets/imgs/MasterCard.png";
import IndiaCard from "../../../assets/imgs/IndiaCard.png";
import BKash from "../../../assets/imgs/BKash.png";

export const PaymentOpt = () => {
  const CardPayments = [
    {
      logo: VisaCard,
      url: "/",
    },
    {
      logo: MasterCard,
      url: "/",
    },
    {
      logo: IndiaCard,
      url: "/",
    },
    {
      logo: BKash,
      url: "/",
    },
  ];
  return (
    <>
      <PaymentOption>
        <div>
          <input type="radio" name="payment" id="bank" />
          <PaymentOptionLabel htmlFor="bank">Bank</PaymentOptionLabel>
        </div>
        <VisaImageGroup>
          {CardPayments.map((item, i) => (
            <Image
              key={i}
              src={item.logo}
              alt="Visa Card"
              widthImage="42px"
              heightImage="28px"
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
    </>
  );
};
