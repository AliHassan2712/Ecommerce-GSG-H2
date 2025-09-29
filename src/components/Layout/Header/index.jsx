//react
import { Link } from "react-router-dom";
//style
import { HeaderStyle, WrapperDiv } from "./style";
//components
import { Logo } from "../../Logo";
import { Container } from "../../Container";
import { SearchBar } from "../../SearchBar";
import { CartIcon, WishIcon } from "../../Icons";
import { Ham } from "../../Hamborger";

//routes
import { PATH } from "../../../constant/PATH";

export const Header = () => {
  return (
    <Container>
      <HeaderStyle>
        <Logo />
        <ul>
          <li>
            <Link to={PATH.Home} className="active">
              Home
            </Link>
          </li>

          <li>
            <Link to={PATH.Contact}>Contact</Link>
          </li>

          <li>
            <Link to={PATH.About}>About</Link>
          </li>

          <li>
            <Link to={PATH.SignUp}>Sign Up</Link>
          </li>
        </ul>
        <WrapperDiv>
          <SearchBar />
          <WishIcon />
          <CartIcon />
        </WrapperDiv>
        {/* <Ham /> */}
      </HeaderStyle>
    </Container>
  );
};
