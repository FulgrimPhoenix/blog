import { Toolbar } from "@mui/material";
import { styled } from "@mui/system";

export const NavBarRoot = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "nowrap",
  overflowX: "auto",
  minHeight: "48px",
  "@media (min-width:600px)": {
    minHeight: "48px",
    padding: "0 24px",
  },
});
