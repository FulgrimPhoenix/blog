import { ThemeProvider } from "@emotion/react";
import { Header } from "../Header/Header";
import { NavBar } from "../NavBar/NavBar";
import { PostsGrid } from "../PostsGrid/PostsGrid";
import { AppRoot } from "./App.styles";
import theme from "../../styles/theme";
import { MainContent } from "../MainContent/MainContent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot>
        <Header />
        <NavBar />
        <PostsGrid />
        <MainContent />
      </AppRoot>
    </ThemeProvider>
  );
}

export default App;
