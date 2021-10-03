import { DefaultTheme } from "styled-components";

const device = {
  tablet: `@media screen and (min-width: 768px)`,
  desktop: `@media screen and (min-width: 1024px)`,
};

// color 회의 때 정한 것으로 임시 적용해두었습니다.
const color = {
  main: "#9C89B8",
  black: "#151515",
  white: "#ffffff",
  darkgrey: "#757575",
  grey: "#b7b7b7",
  border: "#EAEAEA",
  background: "#f8f9fa",
  point: "#f0a6ca",
};

const theme: DefaultTheme = {
  device,
  color,
};

export default theme;
