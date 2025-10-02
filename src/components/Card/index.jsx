//components
import { CardContainer, ActionIcons, ProductImage, DiscountBadge, CardBody, PriceRow, PriceCurrent, Rating, EllipseWrapper, PriceAndRatingRow } from "./style";
import { Image } from "../Common/Image";
import { H3, Span } from "../Typography";
import { Container } from "../Container";
import { EyeIcon, StarFilledIcon, StarIcon, WishIcon } from "../Icons";
import { Ellipse } from "../Ellipse";

export const Card = ({
  prodName,
  imgSrc,
  discount,
  prodPrice,
  ProdPriceAfter,
  rating,
  ratingNum,
  newProd,
  ellipse,
}) => {
  return (
    <Container>
      <CardContainer discount={discount} newProd={newProd}>
        <ActionIcons>
          <EyeIcon />
          <WishIcon />
        </ActionIcons>

        <ProductImage>
          <Image
            src={imgSrc}
            alt="product"
            widthImage="172"
            heightImage="152"
          />
          <button>Add to cart</button>
        </ProductImage>

        {(discount || newProd) && (
          <DiscountBadge discount={discount}>{discount || newProd}</DiscountBadge>
        )}

        <CardBody>
          <H3>{prodName}</H3>

          {/* Price & Rating */}
          {ProdPriceAfter ? (
            <>
              <PriceRow>
                <PriceCurrent>
                  <Span>${prodPrice}</Span>
                </PriceCurrent>
                <Span as="del">{ProdPriceAfter}</Span>
              </PriceRow>

              <Rating>
                {Array.from({ length: 5 }).map((_, i) =>
                  i < rating ? <StarFilledIcon key={i} /> : <StarIcon key={i} />
                )}
                <Span card>({ratingNum})</Span>
              </Rating>
            </>
          ) : (
            <PriceAndRatingRow>
              <PriceCurrent>
                <Span>${prodPrice}</Span>
              </PriceCurrent>
              <Rating>
                {Array.from({ length: 5 }).map((_, i) =>
                  i < rating ? <StarFilledIcon key={i} /> : <StarIcon key={i} />
                )}
                <Span card>({ratingNum})</Span>
              </Rating>
            </PriceAndRatingRow>
          )}

          {ellipse && (
            <EllipseWrapper>
              <Ellipse />
              <Ellipse />
            </EllipseWrapper>
          )}
        </CardBody>
      </CardContainer>
    </Container>
  );
};
