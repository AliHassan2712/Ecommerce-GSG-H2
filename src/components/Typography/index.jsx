//style
import styled from "styled-components";

//styled Components
export const SpanStyle = styled.span``;

export const ParagraphStyle = styled.p``;

export const HStyle = styled.h2``;

export const H1 = ({ children, className, ...props }) => {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }) => {
  return (
    <HStyle className={className} {...props}>
      {children}
    </HStyle>
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

export const Span = ({ children, className, ...props }) => {
  return (
    <SpanStyle className={className} {...props}>
      {children}
    </SpanStyle>
  );
};

export const Paragraph = ({ children }) => {
  return <ParagraphStyle>{children}</ParagraphStyle>;
};
