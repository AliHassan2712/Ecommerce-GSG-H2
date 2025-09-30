import styled from "styled-components";

export const LabelStyle = styled.div`
  width: 217px;
  max-width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: var(--blackColor, #000);
  }

  & svg { 
    width: 7.78px;
    height: 12.73px;
  }

  &:hover a {
   opacity: 0.3;
  }
`;
