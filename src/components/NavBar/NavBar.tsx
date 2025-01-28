import { Link, Toolbar } from "@mui/material";
import { LINKS } from "./NavBar.const";
import { NavBarRoot } from "./NavBar.styles";

export const NavBar = () => {
  return (
    <NavBarRoot as="nav">
      {LINKS.map((link) => {
        return (
          <Link
            variant="body2"
            href={link.link}
            underline="hover"
            color="primary"
            sx={{
              lineHeight: "20px",
              padding: "8px",
              maxHeight: "36px",
              boxSizing: "border-box",
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </NavBarRoot>
  );
};
