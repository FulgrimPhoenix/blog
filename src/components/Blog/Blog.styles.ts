import { styled } from "@mui/material";

export const BlogRoot = styled("div")({
  maxWidth: "1280px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "0 16px",
  boxSizing: "border-box",
  "@media (min-width:600px)": {
    padding: "0 24px",
  },
});
