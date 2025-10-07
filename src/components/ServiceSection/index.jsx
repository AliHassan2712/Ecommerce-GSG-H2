//style
import { HStyle, Span, Wrapper } from "./style";

//components
import { Service } from "../Service";

export const ServiceSection = ({ title, desc, icon }) => {
  return (
    <Wrapper>
      <Service icon={icon} />
      <HStyle>{title}</HStyle>
      <Span>{desc}</Span>
    </Wrapper>
  );
};
