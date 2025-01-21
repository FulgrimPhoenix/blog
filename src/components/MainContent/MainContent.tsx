import { Grid2 } from "@mui/material";
import React from "react";
import { PostsFeed } from "../PostsFeed/PostsFeed";

export const MainContent = () => {
  return (
    <Grid2 container columns={12} spacing={0} sx={{ mt: "24px" }}>
      <Grid2 size={8}>
        <PostsFeed />
      </Grid2>
      <Grid2 size={4}></Grid2>;
    </Grid2>
  );
};
