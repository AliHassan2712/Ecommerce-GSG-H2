//react
import { useNavigate } from "react-router-dom";

//style
import {
  StyledSearch,
  StyledWish,
  StyledCart,
  StyledStar,
  StyledStarFilled,
  StyledEye,
  StyledPerson,
} from "./style";

// Basic icons
export const SearchIcon = () => <StyledSearch />;
export const WishIcon = () => <StyledWish />;
export const StarIcon = () => <StyledStar />;
export const EyeIcon = () => <StyledEye />;
export const StarFilledIcon = () => <StyledStarFilled />;

export const PersonIcon = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return <StyledPerson onClick={navigateToLogin} />;
};

export const CartIcon = () => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  return <StyledCart onClick={navigateToCart} />;
};
