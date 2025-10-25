//react
import { useNavigate } from "react-router-dom";

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

//PATH
import { PATH } from "../../constant/PATH";

//hooks
import { useApi } from "../../hooks/useApi";

export const Card = ({
  id,
  title,
  thumbnail,
  discountPercentage,
  price,
  rating,
  stock,
  ellipse,
}) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const { post, loading } = useApi();

  const addToCart = async (e) => {
    e.stopPropagation();

    // get userId from localStorage
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (!userId) {
      alert("User not logged in!");
      return;
    }

    const body = {
      userId: userId,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    };

    const { data, error } = await post(`${API_URL}/carts/add`, body);

    if (error) {
      console.error("Failed to add to cart:", error);
    } else {
      console.log("Added to cart:", data);
      navigate("/cart");
    }
  };

  const discountedPrice = discountPercentage
    ? (price * (1 - discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <CardContainer
      discount={
        discountPercentage ? `${Math.round(discountPercentage)}%` : null
      }
      newProd={stock > 50 ? "NEW" : null}
      onClick={() => navigate(`/${PATH.PDP}/${id}`)}
    >
      <ActionIcons>
        <EyeIcon />
        <WishIcon />
      </ActionIcons>

      <ProductImage>
        <Image src={thumbnail} alt={title} widthImage="172" heightImage="152" />
        <button onClick={addToCart} disabled={loading}>
          {loading ? "Adding..." : "Add to cart"}
        </button>
      </ProductImage>

      {(discountPercentage || stock > 50) && (
        <DiscountBadge
          discount={
            discountPercentage ? `${Math.round(discountPercentage)}%` : "NEW"
          }
        >
          {discountPercentage ? `${Math.round(discountPercentage)}%` : "NEW"}
        </DiscountBadge>
      )}

      <CardBody>
        <H3>{title}</H3>

        {discountedPrice ? (
          <>
            <PriceRow>
              <PriceCurrent>
                <Span>${discountedPrice}</Span>
              </PriceCurrent>
              <Span as="del">${price}</Span>
            </PriceRow>

            <Rating>
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(rating) ? (
                  <StarFilledIcon key={i} />
                ) : (
                  <StarIcon key={i} />
                )
              )}
              <Span card>({rating})</Span>
            </Rating>
          </>
        ) : (
          <PriceAndRatingRow>
            <PriceCurrent>
              <Span>${price}</Span>
            </PriceCurrent>
            <Rating>
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(rating) ? (
                  <StarFilledIcon key={i} />
                ) : (
                  <StarIcon key={i} />
                )
              )}
              <SpanCard card>({rating})</SpanCard>
            </Rating>
          </PriceAndRatingRow>
        )}

        {ellipse && (
          <EllipseWrapper>
            <Ellipse color="#DB4444" />
            <Ellipse color="#CBE4E8" />
          </EllipseWrapper>
        )}
      </CardBody>
    </CardContainer>
  );
};
