import { Link, Toolbar } from "@mui/material";
import { LINKS } from "./NavBar.const";

export const NavBar = () => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        overflowX: "auto",
        minHeight: "48px",
        "@media (min-width:600px)": {
          minHeight: "48px",
        },
      }}
      component={"nav"}
    >
      {LINKS.map((link) => {
        return (
          <Link
            variant="body2"
            href={link.link}
            underline="hover"
            sx={{ lineHeight: "20px", padding: "8px", color: "#fff" }}
          >
            {link.title}
          </Link>
        );
      })}
    </Toolbar>
  );
};
