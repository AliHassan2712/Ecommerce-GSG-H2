//style
import styled from "styled-components";

//styled Components
const ContainerDiv = styled.div`
  width: 80%;
  margin: auto;
`;

export const Container = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};
