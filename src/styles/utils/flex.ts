import { css } from "styled-components";

const convertFullName = (value: string): string => {
  switch (value) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    default:
      return value;
  }
};

export const flex = (
  jc: string = "center",
  ai: string = "center",
  row: boolean = true,
  block: boolean = true
) => {
  return css`
    display: ${block ? "flex" : "inline-flex"};
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
    flex-direction: ${row ? "row" : "column"};
  `;
};
