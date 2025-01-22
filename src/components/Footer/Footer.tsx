import { Container, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{ boxSizing: "border-box", p: "48px 0", backgroundColor: "#424242" }}
    >
      <Typography
        component="h6"
        textAlign="center"
        color="secondary"
        gutterBottom
      >
        Footer
      </Typography>
      <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }} textAlign="center">
        Something here to give the footer a purpose!
      </Typography>
      <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }} textAlign="center">
        Copyright ©{" "}
        <Link
          href={"https://mui.com"}
          underline="hover"
          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Your Website
        </Link>{" "}
        2025.
      </Typography>
    </Container>
  );
};
