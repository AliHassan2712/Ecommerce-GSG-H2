import styled from "styled-components";

export const EllipseStyle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius:  ${({ theme }) => theme.borderRadius.circle};
  padding: 2px;
  position: relative;

  span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.color};
    border-radius:  ${({ theme }) => theme.borderRadius.circle};

  }
`;