import { ThemeProvider } from "@mui/material/styles";

import theme from "./styles/theme";
import { Blog } from "./components/Blog/Blog";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Blog />
    </ThemeProvider>
  );
};
