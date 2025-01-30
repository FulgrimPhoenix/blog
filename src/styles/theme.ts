import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#eee",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.7)",
    },
    info: {
      main: "#90caf9",
    },
    background: {
      default: "#121212;",
      paper: "rgb(65, 65, 65)",
    },
  },
});

export default theme;
