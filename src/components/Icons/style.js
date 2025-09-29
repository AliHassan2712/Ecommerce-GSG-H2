//react-icons
import { HiOutlineSearch, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import styled from "styled-components";

// Base style (shared for all icons)
const BaseIcon = `
  font-size: 20px;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

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
