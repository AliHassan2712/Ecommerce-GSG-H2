//style
import { OperationDiv } from './style';

export const Operation = ({ left, right, children }) => {
  return (
    <OperationDiv $left={left} $right={right}>
      {children}
    </OperationDiv>
  );
};