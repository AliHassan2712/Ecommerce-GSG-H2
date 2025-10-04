//style
import { StyleTimer } from "./style";

export const Timer = ({ timeNum, time }) => {
  return (
    <StyleTimer>
      <span>{timeNum}</span>
      <span>{time}</span>
    </StyleTimer>
  );
};
