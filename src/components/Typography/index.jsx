//style
import styled from "styled-components";

//styled Components
const SpanStyle = styled.span`
  ${(props) =>
    props.TopHeader
      ? `color:var(--whiteColor);
      margin-left:10px;
      font-weight: 700;
      text-decoration: underline;


      //responsive Design
      @media (max-width: 768px) {
      font-size:10px;
      `
      : `color:blue`}
`;

const ParagraphStyle = styled.p`
  ${(props) =>
    props.TopHeader
      ? `color:var(--whiteColor);
      text-transform: capitalize;

      font-size: ${props.TopHeader};

      //responsive Design
      @media (max-width: 768px) {
      font-size:10px;
      `
      : `color:blue`}
`;

export const H1 = ({ children }) => {
  return <h1>{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2>{children}</h2>;
};

export const H3 = ({ children }) => {
  return <h3>{children}</h3>;
};

export const H4 = ({ children }) => {
  return <h4>{children}</h4>;
};

export const H5 = ({ children }) => {
  return <h5>{children}</h5>;
};

export const H6 = ({ children }) => {
  return <h6>{children}</h6>;
};

export const Span = ({ TopHeader, children }) => {
  return <SpanStyle TopHeader={TopHeader}>{children}</SpanStyle>;
};

export const Paragraph = ({ TopHeader, children }) => {
  return <ParagraphStyle TopHeader={TopHeader}>{children}</ParagraphStyle>;
};

