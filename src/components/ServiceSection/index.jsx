//style
import { Span, Wrapper } from "./style";

//components
import { Service } from "../Service";
import { H3 } from "../Typography";

export const ServiceSection = ({ title, desc, icon }) => {
  return (
    <Wrapper>
      <Service icon={icon} />
      <H3>{title}</H3>
      <Span>{desc}</Span>
    </Wrapper>
  );
};
