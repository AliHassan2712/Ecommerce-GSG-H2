// Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
//style
import { HeaderStyle, WrapperDiv, Overlay } from "./style";
//components
import { Logo } from "../../Logo";
import { Container } from "../../Container";
import { SearchBar } from "../../SearchBar";
import { CartIcon, PersonIcon, WishIcon } from "../../Icons";
import { Ham } from "../../Hamborger";
import { Line } from "../../Common/Line";

//routes
import { PATH } from "../../../constant/PATH";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <Container>
        <HeaderStyle>
          <Logo />
          <ul className={open ? "open" : ""} onClick={closeMenu}>
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
            <PersonIcon/>
          </WrapperDiv>
          <Ham onClick={toggle} open={open} className={open ? "open" : ""} />
        </HeaderStyle>
      </Container>

      {/* Overlay */}
      {open && <Overlay onClick={closeMenu} />}

      <Line />
    </>
  );
};
