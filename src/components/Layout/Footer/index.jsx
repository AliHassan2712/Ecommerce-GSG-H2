import { Link } from "react-router-dom";
//style
import {
  StyleFooter,
  FooterRow,
  InputWrapper,
  SendIcon,
  SocialIcons,
  AppWrapper,
  SubTitle,
  AppText,
  AppLinks,
} from "./style";

//components
import { Container } from "../../Container";
import { ListItem } from "../../ListItem";
import { Logo } from "../../Logo";
import { Image } from "../../Common/Image";

//react icons
import { BiSend } from "react-icons/bi";
import {
  ImFacebook,
  ImInstagram,
  ImLinkedin2,
  ImTwitter,
} from "react-icons/im";

//assets
import QrCode from "../../../assets/imgs/QrCode.jpg";
import GooglePlay from "../../../assets/imgs/GooglePlay.png";
import PlayStore from "../../../assets/imgs/PlayStor.png";

export const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <FooterRow>
          {/* Exclusive */}
          <ListItem>
            <Logo />
            <SubTitle>Subscribe</SubTitle>
            <AppText>Get 10% off your first order</AppText>
            <InputWrapper>
              <input type="text" placeholder="Enter your email" />
              <SendIcon>
                <BiSend />
              </SendIcon>
            </InputWrapper>
          </ListItem>

          {/* Support */}
          <ListItem>
            <SubTitle>Support</SubTitle>
            <Link style={{width:"200px"}}>111 Bijoy sarani, 
            Dhaka, DH 1515, Bangladesh.</Link>
            <Link>exclusive@gmail.com</Link>
            <Link>+88015-88888-99999</Link>
          </ListItem>

          {/* Account */}
          <ListItem>
            <SubTitle>Account</SubTitle>
            <Link>My Account</Link>
            <Link>Login / Register</Link>
            <Link>Cart</Link>
            <Link>Wishlist</Link>
            <Link>Shop</Link>
          </ListItem>

          {/* Quick Link */}
          <ListItem>
            <SubTitle>Quick Link</SubTitle>
            <Link>Privacy Policy</Link>
            <Link>Terms Of Use</Link>
            <Link>FAQ</Link>
            <Link>Contact</Link>
          </ListItem>

          {/* Download App */}
          <ListItem>
            <SubTitle>Download App</SubTitle>
            <AppText>Save $3 with App New User Only</AppText>

            <AppWrapper>
              <div className="qr">
                <Image src={QrCode} widthImage="80" heightImage="80" />
              </div>
              <AppLinks>
                <div>
                  <Image src={PlayStore} />
                </div>
                <div>
                  <Image src={GooglePlay} />
                </div>
              </AppLinks>
            </AppWrapper>

            <SocialIcons>
              <Link>
                <ImFacebook />
              </Link>
              <Link>
                <ImTwitter />
              </Link>
              <Link>
                <ImInstagram />
              </Link>
              <Link>
                <ImLinkedin2 />
              </Link>
            </SocialIcons>
          </ListItem>
        </FooterRow>
      </Container>
    </StyleFooter>
  );
};
