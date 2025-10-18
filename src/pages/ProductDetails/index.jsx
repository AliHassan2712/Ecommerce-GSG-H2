//style
import {
  DetailsSection,
  GalleryMain,
  GallerySmall,
  SmallImageWrapper,
  InfoWrapper,
  Reviews,
  Span,
  Price,
  Paragraph,
  OptionRow,
  OptionChoices,
  BayNowDiv,
  SizeStyle,
  DeliveryDiv,
  LineStyleDiv,
} from "./style";

//components
import { Container } from "../../components/Container";
import { Image } from "../../components/Common/Image";
import { H2 } from "../../components/Typography";
import { StarFilledIcon, StarIcon, WishIcon } from "../../components/Icons";
import { Line } from "../../components/Common/Line";
import { Ellipse } from "../../components/Ellipse";
import { RelatedSection } from "../../components/RelatedSection";
import { Size } from "../../components/Size";
import { Quantity } from "../../components/Quantity";
import { Button } from "../../components/Common/Button/Button";
import { Delivery } from "../../components/Delivery";

//react icons
import { GrDeliver } from "react-icons/gr";
import { IoReload } from "react-icons/io5";

//assets
import controller from "../../assets/imgs/controller.png";
export const ProductDetails = () => {
  // const {id} = useParams()
  const rating = 4;
  const size = ["xs", "sm", "m", "l", "xl"];
  const delivery = [
    {
      title: "Free Delivery",
      desc: "Enter your postal code for Delivery Availability",
      icon: GrDeliver,
    },
    {
      title: "Return Delivery",
      desc: "Free 30 Days Delivery Returns. Details",
      icon: IoReload,
    },
  ];
  const reviewsCount = 150;

  return (
    <div>
      <Container>
        <DetailsSection>
          <GallerySmall>
            {[1, 2, 3, 4].map((i) => (
              <SmallImageWrapper key={i}>
                <Image src={controller} widthImage={121} heightImage={114} />
              </SmallImageWrapper>
            ))}
          </GallerySmall>

          <GalleryMain>
            <Image src={controller} widthImage={446} heightImage={315} />
          </GalleryMain>

          <InfoWrapper>
            <H2>Havic HV G-92 Gamepad</H2>
            <Reviews>
              {Array.from({ length: 5 }).map((_, i) =>
                i < rating ? <StarFilledIcon key={i} /> : <StarIcon key={i} />
              )}
              <Span>
                ({reviewsCount} Reviews) <span>In Stock</span>
              </Span>
            </Reviews>
            <Price>$192.00</Price>
            <Paragraph>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </Paragraph>
            <LineStyleDiv>
              <Line />
            </LineStyleDiv>
            <OptionRow>
              Colours:
              <OptionChoices>
                <Ellipse color="#A0BCE0" isSelected />
                <Ellipse color="#E07575" />
              </OptionChoices>
            </OptionRow>
            <OptionRow>
              Size:
              <OptionChoices>
                {size.map((item, index) => (
                  <Size key={item} isSelected={index === 2}>
                    {" "}
                    {item}
                  </Size>
                ))}
              </OptionChoices>
            </OptionRow>

            <BayNowDiv>
              <Quantity />
              <Button>Bay Now</Button>
              <SizeStyle>
                <WishIcon />
              </SizeStyle>
            </BayNowDiv>

            <DeliveryDiv>
              {delivery.map((item, i) => {
                return <Delivery key={i} {...item} />;
              })}
            </DeliveryDiv>
          </InfoWrapper>
        </DetailsSection>
      </Container>
      <RelatedSection />
    </div>
  );
};
