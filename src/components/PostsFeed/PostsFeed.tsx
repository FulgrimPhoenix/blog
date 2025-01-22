import { Container, Divider, Link, Typography } from "@mui/material";
import { POSTSLIST } from "./PostsFeed.const";

export const PostsFeed = () => {
  return (
    <Container
      sx={{
        margin: 0,
        boxSizing: "border-box",
        p: "20px 0",
        "@media (min-width:600px)": {
          padding: "20px 20px 20px 0px",
        },
      }}
    >
      <Typography
        component="h6"
        color="secondary"
        variant="h6"
        sx={{
          letterSpacing: "0.0075em",
          fontSize: "1.25rem",
          fontWeight: "500",
          lineHeight: "1.6",
        }}
        gutterBottom
      >
        From the firehose
      </Typography>
      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }} />

      {POSTSLIST.map((post) => {
        return (
          <Container
            sx={{
              margin: 0,
              boxSizing: "border-box",
              p: "24px 0",
              "@media (min-width:600px)": {
                padding: "24px 0 ",
              },
            }}
          >
            <Typography
              component="h5"
              variant="h5"
              color="secondary"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              color="secondary"
              component="p"
              sx={{
                fontSize: "0.75rem",
                fontWeight: "400",
                lineHeight: "1.66",
                letterSpacing: "0.03333em",
                mb: "16px",
              }}
            >
              {`${post.date.toLocaleDateString("en-US", {
                month: "long",
              })} ${post.date.getDate()}, ${post.date.getFullYear()}`}{" "}
              by{" "}
              <Link href={post.author.link} underline="none">
                {post.author.name}
              </Link>
            </Typography>
            {post.text}
          </Container>
        );
      })}
    </Container>
  );
};
