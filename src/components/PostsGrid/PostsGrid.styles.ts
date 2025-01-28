import { styled, Container, Card } from "@mui/material";

export const MainPostContent = styled(Container)({
  margin: 0,
  boxSizing: "border-box",
  padding: "24px",
  "@media (min-width:1200px)": {
    maxWidth: "50%",
  },
  "@media (min-width:769px)": {
    padding: "48px 0 48px 48px",
  },
});

export const CardContent = styled(Container)({
  maxWidth: "440px",
  padding: "16px 16px 24px 16px",
  margin: "0",
  boxSizing: "border-box",
  "@media (min-width:1200px)": {
    maxWidth: "440px",
  },
  "@media (min-width:600px)": {
    padding: "16px 16px 24px",
  },
});

export const CardContainer = styled(Card)({
  backgroundColor: "rgba(85, 85, 85, 0.9)",
  transition: "background .3s linear",
  ":hover": { backgroundColor: "rgba(66, 66, 66, 1)" },
});
