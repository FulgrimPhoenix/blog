import { Link, Paper, SvgIcon, Typography } from "@mui/material";
import { ARCHIVE_LINKS, SOCIAL_MEDIA_LINKS } from "./LinksBlock.const";
import { LinksBlockRoot } from "./LinksBlock.styes";
import theme from "../../styles/theme";

export const LinksBlock = () => {
  return (
    <LinksBlockRoot>
      <Paper
        sx={{
          backgroundColor: theme.palette.primary.light,
          boxSizing: "border-box",
          p: "16px",
        }}
      >
        <Typography component="h6" variant="h6" color="secondary" gutterBottom>
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
        color="primary"
        sx={{ mt: "24px" }}
        gutterBottom
      >
        Archives
      </Typography>
      {ARCHIVE_LINKS.map((link) => (
        <Link href={link.link} variant="body1" color="info" underline="hover">
          {link.title}
        </Link>
      ))}
      <Typography
        component="h6"
        variant="h6"
        color="primary"
        sx={{ mt: "24px" }}
        gutterBottom
      >
        Social
      </Typography>
      {SOCIAL_MEDIA_LINKS.map((link) => (
        <Link
          href={link.link}
          sx={{ display: "flex" }}
          underline="hover"
          color="info"
        >
          <SvgIcon component={link.icon} sx={{ p: "4px 4px 4px 0" }} />
          <Typography component="span" sx={{ p: "4px", m: "auto 0" }}>
            {link.title}
          </Typography>
        </Link>
      ))}
    </LinksBlockRoot>
  );
};
