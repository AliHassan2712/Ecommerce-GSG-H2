//react-icons
import { BsEye } from "react-icons/bs";
import { HiOutlineSearch, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineStar, HiStar } from "react-icons/hi";
import styled from "styled-components";

// Base style (shared for all icons)
const BaseIcon = `
  font-size: 24px;
  width:24px;
  height:24px;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  background-color:white;
 border-radius: 50%;`;

// Individual styled outline icons
export const StyledSearch = styled(HiOutlineSearch)`
  ${BaseIcon}
  &:hover {
    color: green;
   
  }
`;

export const StyledWish = styled(HiOutlineHeart)`
  ${BaseIcon}
  &:hover {
    color: red;
  }
`;

export const StyledCart = styled(HiOutlineShoppingCart)`
  ${BaseIcon}
  &:hover {
    color: blue;
  }
`;

export const StyledEye = styled(BsEye)`
  ${BaseIcon}
  &:hover {
    color: blue;
  }
`;

// Star (outline) and Star filled icons
export const StyledStar = styled(HiStar)`
cursor: pointer;
&:hover {
  color: goldenrod;
}
`;

export const StyledStarFilled = styled(HiStar)`
cursor: pointer;
  color: goldenrod; 
`;
