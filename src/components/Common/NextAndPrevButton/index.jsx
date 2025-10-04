//style
import { ButtonGroup } from "./style";
//components
import { CircleButton } from "../Button/CircleButton";
// react icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



export const NextAndPrevButton = () => {
  return (
    <ButtonGroup>
      <CircleButton>
        <FaArrowLeft />
      </CircleButton>

      <CircleButton>
        <FaArrowRight />
      </CircleButton>
    </ButtonGroup>
  );
};
