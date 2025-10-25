//style
import { ErrorStyle } from "./style";

export const ErrorFetch = ({ error }) => {
  return <ErrorStyle>Failed to load products: {error}</ErrorStyle>;
};
