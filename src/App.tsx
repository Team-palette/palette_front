import { ThemeProvider } from "styled-components";
import Router from "./components/Router";
import theme from "./styles/utils/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
