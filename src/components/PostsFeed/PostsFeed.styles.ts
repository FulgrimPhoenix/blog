import { Container, styled } from "@mui/material";

export const PostsFeedRoot = styled(Container)({
  margin: 0,
  boxSizing: "border-box",
  padding: "20px 0",
  "@media (min-width:600px)": {
    padding: "20px 20px 20px 0px",
  },
});

export const PostContainer = styled(Container)({
  margin: 0,
  boxSizing: "border-box",
  padding: "24px 0",
  "@media (min-width:600px)": {
    padding: "24px 0 ",
  },
});
