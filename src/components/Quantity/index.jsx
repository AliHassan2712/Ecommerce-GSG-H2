//style
import { StyleDiv } from './style';

//components
import { Operation } from '../Operation';

export const Quantity = () => {
  return (
    <StyleDiv>
      <Operation left={true}>-</Operation>
      <Operation>1</Operation> 
      <Operation right={true}>+</Operation>
    </StyleDiv>
  );
};