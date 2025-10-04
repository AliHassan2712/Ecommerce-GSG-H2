//style
import { SpanBox, StyleBox } from "./style";

export const BoxCategory = ({ category, icon: Icon }) => {
  return (
    <StyleBox>
      <div>
        <Icon size={30} />
      </div>
      <SpanBox>{category}</SpanBox>
    </StyleBox>
  );
};
