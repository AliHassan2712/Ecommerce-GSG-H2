//style
import { LoadingWrapper, Spinner, Text } from "./style";

export const Loading = ({ text = "Loading..." }) => {
  return (
    <LoadingWrapper>
      <Spinner />
      <Text>{text}</Text>
    </LoadingWrapper>
  );
};
