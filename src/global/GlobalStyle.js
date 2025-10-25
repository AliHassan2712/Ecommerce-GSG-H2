import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

//display flex and just content space between
export const FlexBetween = {
  "display": "flex",
  "align-items": "center",
  "justify-content": "space-between",
}


//display flex and just content center
export const FlexCenter = {
   "display": "flex",
  "align-items": "center",
  "justify-content": "center",
}
