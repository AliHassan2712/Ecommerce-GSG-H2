//style
import { StyleDiv } from "./style";
//components
import { SearchIcon } from "../Icons";

export const SearchBar = () => {
  return (
    <StyleDiv>
      <input type="text" placeholder="What are you looking for ?" />
      <SearchIcon />
    </StyleDiv>
  );
};
