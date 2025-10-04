//style
import {
  Button,
  H,
  Span,
  StyledDiv,
  LeftWrapper,
  TimerWrapper,
  RightWrapper,
} from "./style";

//component
import { Timer } from "../Timer";
import { Image } from "../Common/Image";

//assets
import BoomBox from "../../assets/imgs/BoomBox.png";

export const CategoriesTimer = () => {
  return (
    <StyledDiv>
      {/* Left section */}
      <LeftWrapper>
        <Span>Categories</Span>
        <H>Enhance Your Music Experience</H>

        <TimerWrapper>
          <Timer time="Days" timeNum="05" />
          <Timer time="Hours" timeNum="23" />
          <Timer time="Minutes" timeNum="59" />
          <Timer time="Seconds" timeNum="35" />
        </TimerWrapper>

        <Button>Buy Now!</Button>
      </LeftWrapper>

      {/* Right section */}
      <RightWrapper>
        <Image src={BoomBox} alt="BoomBox" widthImage="568" heightImage="330" />
      </RightWrapper>
    </StyledDiv>
  );
};
