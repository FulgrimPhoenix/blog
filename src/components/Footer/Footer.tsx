import { Container, Link, Typography } from "@mui/material";
import { FooterRoot } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterRoot>
      <Typography
        component="h6"
        variant="h6"
        textAlign="center"
        color="primary"
        gutterBottom
      >
        Footer
      </Typography>
      <Typography color="secondary" textAlign="center">
        Something here to give the footer a purpose!
      </Typography>
      <Typography color="secondary" textAlign="center" variant="body2">
        Copyright ©{" "}
        <Link href={"https://mui.com"} underline="hover" color="secondary">
          Your Website
        </Link>{" "}
        2025.
      </Typography>
    </FooterRoot>
  );
};
