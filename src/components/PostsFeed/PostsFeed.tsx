import { Container, Divider, Link, Typography } from "@mui/material";
import { POSTSLIST } from "./PostsFeed.const";
import { PostContainer, PostsFeedRoot } from "./PostsFeed.styles";

export const PostsFeed = () => {
  return (
    <PostsFeedRoot>
      <Typography
        component="h6"
        color="primary"
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
          <PostContainer>
            <Typography
              component="h5"
              variant="h5"
              color="primary"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              color="primary"
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
              <Link href={post.author.link} underline="none" color="info">
                {post.author.name}
              </Link>
            </Typography>
            {post.text}
          </PostContainer>
        );
      })}
    </PostsFeedRoot>
  );
};
