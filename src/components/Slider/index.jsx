//style
import {
  SliderWrapper,
  SliderContent,
  TextBlock,
  Title,
  SubTitle,
  ShopNow,
  PaginationWrap,
  RightImage,
} from "./style";

//components
import { Container } from "../../components/Container";
import PaginationDots from "../PaginationDots";
import { Image } from "../Common/Image";

//assets
import iphone14 from "../../assets/imgs/iphone14.jpg";
import iphoneLogo from "../../assets/imgs/iphoneLogo.png";
//react icons
import { CgArrowRight } from "react-icons/cg";

export const Slider = () => {
  return (
    <SliderWrapper>
      <Container>
        <SliderContent>
          {/* Left Side (Text + Logo) */}
          <TextBlock>
          
            <div> 
              <Image
                src={iphoneLogo}
                widthImage="40"
                heightImage="40"
                alt="iPhone logo"
              />
              <SubTitle>iPhone 14 Series</SubTitle>
            </div>
            <Title>Up to 10% off Voucher</Title>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShopNow>Shop Now </ShopNow>
            <CgArrowRight></CgArrowRight>
            </div>
          </TextBlock>

          {/* Right Side (Image) */}
          <RightImage>
            <Image src={iphone14} alt="iPhone 14"  widthImage="496"
            heightImage="352" />
          </RightImage>
        </SliderContent>
      </Container>

      {/* Dots navigation */}
      <PaginationWrap>
        <PaginationDots total={4} activeIndex={1} />
      </PaginationWrap>
    </SliderWrapper>
  );
};