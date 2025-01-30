import { CardActionArea, Grid2, Link, Paper, Typography } from "@mui/material";
import { MAIN_POST, SECONDARY_POSTS } from "./PostsGrid.const";
import {
  CardContainer,
  CardContent,
  MainPostContent,
} from "./PostsGrid.styles";

export const PostsGrid = () => {
  return (
    <>
      <Paper
        elevation={1}
        variant="elevation"
        sx={{
          mb: "32px",
        }}
      >
        <MainPostContent>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            {MAIN_POST.title}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="primary"
            sx={{ mb: "16px" }}
          >
            {MAIN_POST.paragraph}
          </Typography>
          <Link
            href={MAIN_POST.moreInfo.link}
            underline="hover"
            color="info"
            sx={{ lineHeight: "1.75", fontSize: "1rem", fontWeight: "400" }}
          >
            {MAIN_POST.moreInfo.linkText}
          </Link>
        </MainPostContent>
      </Paper>
      <Grid2 container columns={12} spacing={4}>
        {SECONDARY_POSTS.map((post) => {
          return (
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <CardContainer>
                <CardActionArea>
                  <CardContent>
                    <Typography component="h2" variant="h5" color="primary">
                      {post.title}
                    </Typography>
                    <Typography
                      component="h6"
                      variant="subtitle1"
                      color="secondary"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "400",
                      }}
                    >
                      {post.date
                        ? `${post.date.toLocaleDateString("en-US", {
                            month: "short",
                          })} ${post.date.getDate()}`
                        : null}
                    </Typography>
                    <Typography
                      component="p"
                      variant="subtitle1"
                      color="primary"
                      sx={{ pb: "16px" }}
                    >
                      {post.paragraph}
                    </Typography>
                    <Link
                      href={post.moreInfo.link}
                      underline="none"
                      color="info"
                      sx={{
                        lineHeight: "1.75",
                        fontSize: "1rem",
                        fontWeight: "400",
                      }}
                    >
                      {post.moreInfo.linkText}
                    </Link>
                  </CardContent>
                </CardActionArea>
              </CardContainer>
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};
