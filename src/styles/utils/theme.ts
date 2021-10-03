import { DefaultTheme } from "styled-components";

const device = {
  tablet: `@media screen and (min-width: 768px)`,
  desktop: `@media screen and (min-width: 1024px)`,
};

// color는 정해지면 채워넣어요..
const color = {
  main: "",
  black: "",
  white: "",
  grey: "",
  border: "",
};

const theme: DefaultTheme = {
  device,
  color,
};

export default theme;
