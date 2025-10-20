//react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// style
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

// components
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
import { Loading } from "../../components/Loading";
import BasicBreadcrumbs from "../../components/Common/Breadcrumbs";

// react icons
import { GrDeliver } from "react-icons/gr";
import { IoReload } from "react-icons/io5";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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

  //fetch product details
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch((err) => console.error("Failed to load product:", err));
  }, [id]);

  //loading state if product is null (while fetching)
  if (!product) return <Loading text="Fetching product details..." />;

  return (
    <div>
      <Container>
        <BasicBreadcrumbs
          pages={[
            { title: "Account", url: "/" },
            { title: "Gaming", url: "/" },
            { title: product.title, url: "/" },
          ]}
        />
        <DetailsSection>
          <GallerySmall>
            {product.images?.map((img, i) => (
              <SmallImageWrapper key={i}>
                <Image src={img} widthImage={121} heightImage={114} />
              </SmallImageWrapper>
            ))}
          </GallerySmall>

          <GalleryMain>
            <Image src={product.thumbnail} widthImage={446} heightImage={315} />
          </GalleryMain>

          <InfoWrapper>
            <H2>{product.title}</H2>

            <Reviews>
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(product.rating) ? (
                  <StarFilledIcon key={i} />
                ) : (
                  <StarIcon key={i} />
                )
              )}
              <Span>
                ({product.rating} Reviews){" "}
                <span>{product.availabilityStatus}</span>
              </Span>
            </Reviews>

            <Price>${product.price}</Price>
            <Paragraph>{product.description}</Paragraph>

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
                    {item}
                  </Size>
                ))}
              </OptionChoices>
            </OptionRow>

            <BayNowDiv>
              <Quantity />
              <Button>Buy Now</Button>
              <SizeStyle>
                <WishIcon />
              </SizeStyle>
            </BayNowDiv>

            <DeliveryDiv>
              {delivery.map((item, i) => (
                <Delivery key={i} {...item} />
              ))}
            </DeliveryDiv>
          </InfoWrapper>
        </DetailsSection>
      </Container>
      <RelatedSection />
    </div>
  );
};
