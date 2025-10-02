//style
import styled from "styled-components";

//styled Components
export const SpanStyle = styled.span`
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
      : ""}

  ${(props) =>
    props.fontSize
      ? `font-size:${props.fontSize}
      font-weight: 400;
      color:var(--whiteColor)
      `
      : ""}


 ${(props) =>
    props.card
      ? `font-size:14px;
      font-weight: 400;
      color: black;
      opacity:0.5;
      `
      : ""}

 ${(props) =>
    props.fontSize && props.fontWeight
      ? `font-weight:${+props.fontWeight}
      font-size:${props.fontSize}
      
      color:var(--whiteColor)
      `
      : ""}
`;

export const ParagraphStyle = styled.p`
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

export const H1 = ({ children, className, ...props }) => {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }) => {
  return (
    <h2 className={className} {...props}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...props }) => {
  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, ...props }) => {
  return (
    <h4 className={className} {...props}>
      {children}
    </h4>
  );
};

export const H5 = ({ children, className, ...props }) => {
  return (
    <h5 className={className} {...props}>
      {children}
    </h5>
  );
};

export const H6 = ({ children, className, ...props }) => {
  return (
    <h6 className={className} {...props}>
      {children}
    </h6>
  );
};

export const Span = ({
  fontWeight,
  fontSize,
  TopHeader,
  children,
  className,
  ...props
}) => {
  return (
    <SpanStyle
      className={className}
      fontWeight={fontWeight}
      TopHeader={TopHeader}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </SpanStyle>
  );
};

export const Paragraph = ({ TopHeader, children }) => {
  return <ParagraphStyle TopHeader={TopHeader}>{children}</ParagraphStyle>;
};
