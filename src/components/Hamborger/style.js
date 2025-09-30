import styled from "styled-components";

export const StyleButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
    margin: 4px 0;
    transition: transform 250ms ease, opacity 200ms ease;
    transform-origin: center;
  }

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }

  &.open {
    div:nth-child(1) {
      transform: rotate(-45deg) translate(0, 6px);
    }
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      transform: rotate(45deg) translate(0, -6px);
    }
  }
`;
