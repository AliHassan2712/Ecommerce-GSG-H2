//style
import styled from "styled-components";

//styled Components
const ContainerDiv = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width:767px) {
    width: 90%;
  }
`;

export const Container = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};
