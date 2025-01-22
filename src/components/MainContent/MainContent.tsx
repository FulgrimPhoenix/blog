import { Grid2 } from "@mui/material";
import React from "react";
import { PostsFeed } from "../PostsFeed/PostsFeed";
import { LinksBlock } from "../LinksBlock/LinksBlock";

export const MainContent = () => {
  return (
    <Grid2 container columns={12} spacing={0} sx={{ mt: "24px" }}>
      <Grid2 size={{ xs: 12, sm: 12, md: 8 }}>
        <PostsFeed />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
        <LinksBlock />
      </Grid2>
    </Grid2>
  );
};
