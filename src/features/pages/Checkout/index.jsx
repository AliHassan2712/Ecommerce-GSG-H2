import BasicBreadcrumbs from "../../../components/Common/Breadcrumbs";
import { Container } from "../../../components/Container";
import { FormCheckout } from "../../components/FormCheckout";
import { Payment } from "../../components/Payment";
import { H2, WrapperDiv } from "./style";

export const Checkout = () => {
  return (
    <>
      <Container>
        <BasicBreadcrumbs
          pages={[
            { title: "Account", url: "/" },
            { title: "My Account", url: "/" },
            { title: "Product", url: "/" },
            { title: "View Cart", url: "/" },
            { title: "CheckOut", url: "/" },
          ]}
        />
        <H2>Billing Details</H2>

        <WrapperDiv>
          {/* left side Form */}
          <FormCheckout />
          {/* right side Form */}
          <Payment />
        </WrapperDiv>
      </Container>
    </>
  );
};
