import "styled-components";

// styled-components 패키지에 있는 DefaultTheme 타이핑 하기
// 최초에는 비어있지만, declare module 을 통해 라이브러리의 타입을 새로 선언할 수 있다.
declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      tablet: string;
      desktop: string;
    };
    color: {
      main: string;
      black: string;
      white: string;
      grey: string;
      border: string;
    };
  }
}
