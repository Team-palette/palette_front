import { DefaultTheme } from "styled-components";

const device = {
  mobile: `@media screen and (max-width: 767px)`,
  tablet: `@media screen and (max-width: 1024px)`,
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
