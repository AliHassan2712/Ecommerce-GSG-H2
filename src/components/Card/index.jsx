//style
import {
  CardContainer,
  ActionIcons,
  ProductImage,
  DiscountBadge,
  CardBody,
  PriceRow,
  PriceCurrent,
  Rating,
  EllipseWrapper,
  PriceAndRatingRow,
  SpanCard,
} from "./style";

//components
import { Image } from "../Common/Image";
import { H3, Span } from "../Typography";
import { Ellipse } from "../Ellipse";
import { EyeIcon, StarFilledIcon, StarIcon, WishIcon } from "../Icons";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant/PATH";

export const Card = ({
  id,
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
  const navigate = useNavigate();

  const addToCart = (e) => {
    e.stopPropagation();
  };

  return (
    <CardContainer
      discount={discount}
      newProd={newProd}
      onClick={() => navigate(`/${PATH.PDP}/${id}`)}
    >
      <ActionIcons>
        <EyeIcon />
        <WishIcon />
      </ActionIcons>

      <ProductImage>
        <Image src={imgSrc} alt="product" widthImage="172" heightImage="152" />
        <button onClick={(e) => addToCart(e)}>Add to cart</button>
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
              <SpanCard card>({ratingNum})</SpanCard>
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
  );
};
