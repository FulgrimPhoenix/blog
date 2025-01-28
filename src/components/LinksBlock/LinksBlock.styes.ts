import { Container, styled } from "@mui/material";

export const LinksBlockRoot = styled(Container)({
  margin: 0,
  boxSizing: "border-box",
  padding: "20px 0",
  "@media (min-width:769px)": {
    padding: "20px 0 20px 20px",
  },
  "@media (min-width:600px)": {
    padding: "20px 0 0",
  },
  display: "flex",
  flexDirection: "column",
});
