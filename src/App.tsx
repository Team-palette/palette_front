import { ThemeProvider } from "styled-components";

import Router from "./components/Router";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/utils/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
