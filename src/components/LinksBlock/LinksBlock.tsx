import { Container, Link, Paper, SvgIcon, Typography } from "@mui/material";
import { ARCHIVELINKS, SOCIALMEDIALINKS } from "./LinksBlock.const";

export const LinksBlock = () => {
  return (
    <Container
      sx={{
        margin: 0,
        boxSizing: "border-box",
        "@media (min-width:600px)": {
          padding: "20px 0 20px 20px",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{ backgroundColor: "#eeeeee", boxSizing: "border-box", p: "16px" }}
      >
        <Typography component="h6" variant="h6" color="secondary">
          About
        </Typography>
        <Typography component="p" variant="body1" color="secondary">
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
      </Paper>
      <Typography
        component="h6"
        variant="h6"
        color="secondary"
        sx={{ mt: "24px" }}
        gutterBottom
      >
        Archives
      </Typography>
      {ARCHIVELINKS.map((link) => {
        return (
          <Link
            href={link.link}
            variant="body1"
            color="primary"
            underline="hover"
          >
            {link.title}
          </Link>
        );
      })}
      <Typography
        component="h6"
        variant="h6"
        color="secondary"
        sx={{ mt: "24px" }}
        gutterBottom
      >
        Social
      </Typography>
      {SOCIALMEDIALINKS.map((link) => {
        return (
          <Link href={link.link} sx={{ display: "flex" }} underline="hover">
            <SvgIcon component={link.icon} sx={{ p: "4px 4px 4px 0" }} />
            <Typography component="span" sx={{ p: "4px", m: "auto 0" }}>
              {link.title}
            </Typography>
          </Link>
        );
      })}
    </Container>
  );
};
