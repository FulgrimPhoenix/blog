import { ThemeProvider } from "@emotion/react";
import { Header } from "../Header/Header";
import { NavBar } from "../NavBar/NavBar";
import { PostsGrid } from "../PostsGrid/PostsGrid";
import { BlogRoot } from "./Blog.styles";
import theme from "../../styles/theme";
import { MainContent } from "../MainContent/MainContent";
import { Footer } from "../Footer/Footer";

export function Blog() {
  return (
    <>
      <BlogRoot>
        <Header />
        <NavBar />
        <PostsGrid />
        <MainContent />
      </BlogRoot>
      <Footer />
    </>
  );
}
