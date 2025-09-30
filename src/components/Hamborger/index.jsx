//style
import { StyleButton } from "./style";

export const Ham = ({ onClick, className, open = false }) => {
  return (
    <StyleButton onClick={onClick} className={className} aria-expanded={open}>
      <div />
      <div />
      <div />
    </StyleButton>
  );
};
