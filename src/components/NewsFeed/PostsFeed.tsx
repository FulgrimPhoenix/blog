import {
  Card,
  CardActionArea,
  Container,
  Grid2,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { MAINPOST, POSTSLIST } from "./PostsFeed.const";

export const PostsFeed = () => {
  return (
    <>
      <Paper
        elevation={1}
        variant="elevation"
        sx={{
          backgroundColor: "rgba(66, 66, 66, .6)",
          mb: "32px",
        }}
      >
        <Container
          sx={{
            maxWidth: "50%",
            padding: "48px 0 48px 48px",
            margin: 0,
            boxSizing: "border-box",
            "@media (min-width:1200px)": {
              maxWidth: "50%",
            },
            "@media (min-width:600px)": {
              padding: "48px 0 48px 48px",
            },
          }}
        >
          <Typography variant="h3" component="h1" color="#fff" gutterBottom>
            {MAINPOST.title}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="#fff"
            sx={{ mb: "16px" }}
          >
            {MAINPOST.paragraph}
          </Typography>
          <Link
            href={MAINPOST.moreInfo.link}
            underline="hover"
            color="primary"
            sx={{ lineHeight: "1.75", fontSize: "1rem", fontWeight: "400" }}
          >
            {MAINPOST.moreInfo.linkText}
          </Link>
        </Container>
      </Paper>
      <Grid2 container columns={12} spacing={4}>
        {POSTSLIST.map((post) => {
          return (
            <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
              <Card
                sx={{
                  backgroundColor: "rgba(66, 66, 66, .9)",
                  transition: "background .3s linear",
                  ":hover": { backgroundColor: "rgba(66, 66, 66, 1)" },
                }}
              >
                <CardActionArea>
                  <Container
                    sx={{
                      maxWidth: "440px",
                      p: "0",
                      m: "0",
                      "@media (min-width:1200px)": {
                        maxWidth: "440px",
                      },
                      "@media (min-width:600px)": {
                        p: "16px 16px 24px",
                      },
                    }}
                  >
                    <Typography component="h2" variant="h5" color="secondary">
                      {post.title}
                    </Typography>
                    <Typography
                      component="h6"
                      variant="subtitle1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
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
                      color="secondary"
                      sx={{ pb: "16px" }}
                    >
                      {post.paragraph}
                    </Typography>
                    <Link
                      href={post.moreInfo.link}
                      underline="none"
                      color="primary"
                      sx={{
                        lineHeight: "1.75",
                        fontSize: "1rem",
                        fontWeight: "400",
                      }}
                    >
                      {post.moreInfo.linkText}
                    </Link>
                  </Container>
                </CardActionArea>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};
