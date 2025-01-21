import { ThemeProvider } from "@emotion/react";
import { Header } from "../Header/Header";
import { NavBar } from "../NavBar/NavBar";
import { PostsFeed } from "../NewsFeed/PostsFeed";
import { AppRoot } from "./App.styles";
import theme from "../../styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot>
        <Header />
        <NavBar />
        <PostsFeed />
      </AppRoot>
    </ThemeProvider>
  );
}

export default App;
