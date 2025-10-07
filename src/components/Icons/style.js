//react-icons
import { BsEye } from "react-icons/bs";
import { HiOutlineSearch, HiOutlineHeart, HiOutlineShoppingCart, HiStar } from "react-icons/hi";
import styled from "styled-components";

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

`;

export const StyledWish = styled(HiOutlineHeart)`
  ${BaseIcon}

`;

export const StyledCart = styled(HiOutlineShoppingCart)`
  ${BaseIcon}

`;

export const StyledEye = styled(BsEye)`
  ${BaseIcon}

`;

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
