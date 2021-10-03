import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
