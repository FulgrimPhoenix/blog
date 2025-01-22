import { Container, Typography } from "@mui/material";
import { JSX } from "react";

interface IPOST {
  title: string;
  date: Date;
  author: { name: string; link: string };
  text: JSX.Element;
}

export const POSTSLIST: IPOST[] = [
  {
    title: "Sample blog post",
    date: new Date(2020, 3, 1),
    author: { name: "Olivier", link: "#" },
    text: (
      <>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying{" "}
          <Typography component="code" fontFamily="monospace">
            {"Markdown.js."}
          </Typography>
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Curabitur blandit tempus porttitor.{" "}
          <Typography component="strong" fontWeight="700">
            Nullam quis risus eget urna mollis
          </Typography>{" "}
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
        <Typography component="h6" variant="h6" color="secondary" gutterBottom>
          Heading
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </Typography>
        <Typography
          component="h6"
          variant="subtitle1"
          color="secondary"
          gutterBottom
        >
          Sub-heading
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </Typography>
        <Typography
          component="h6"
          variant="subtitle1"
          color="secondary"
          gutterBottom
        >
          Sub-heading
        </Typography>
        <Typography color="secondary">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </Typography>
        <Container
          component="ul"
          sx={{
            m: "14px 0",
            padding: "0 ",
            pl: "40px",
            "@media (min-width:600px)": {
              padding: "0 ",
              pl: "40px",
            },
          }}
        >
          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>

          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Donec id elit non mi porta gravida at eget metus.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Nulla vitae elit libero, a pharetra augue.
          </Typography>
        </Container>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </Typography>
        <Container
          component="ol"
          sx={{
            padding: "0 ",
            pl: "40px",
            m: "14px 0",
            "@media (min-width:600px)": {
              padding: "0 ",
              pl: "40px",
            },
          }}
        >
          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Vestibulum id ligula porta felis euismod semper.
          </Typography>

          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </Typography>
        </Container>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </Typography>
      </>
    ),
  },
  {
    title: "Another blog post",
    date: new Date(2020, 2, 23),
    author: { name: "Matt", link: "#" },
    text: (
      <>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Curabitur blandit tempus porttitor.{" "}
          <Typography component="strong" fontWeight="700">
            Nullam quis risus eget urna mollis
          </Typography>{" "}
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </Typography>
      </>
    ),
  },
  {
    title: "New feature",
    date: new Date(2020, 2, 14),
    author: { name: "Tom", link: "#" },
    text: (
      <>
        <Typography color="secondary">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </Typography>
        <Container
          component="ul"
          sx={{
            m: "14px 0",
            padding: "0 ",
            pl: "40px",
            "@media (min-width:600px)": {
              padding: "0 ",
              pl: "40px",
            },
          }}
        >
          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>

          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Donec id elit non mi porta gravida at eget metus.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            color="secondary"
            sx={{ mt: "8px" }}
          >
            Nulla vitae elit libero, a pharetra augue.
          </Typography>
        </Container>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
        <Typography color="secondary" sx={{ mb: "16px" }}>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </Typography>
      </>
    ),
  },
];
