import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "none",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <Toolbar>
        <Button size="small" color="secondary">
          subscribe
        </Button>
        <Typography
          variant="h5"
          component="h2"
          sx={{ flexGrow: 2, textAlign: "center" }}
          color="secondary"
        >
          Blog
        </Typography>
        <IconButton size="large" color="secondary">
          <SearchIcon />
        </IconButton>
        <Button
          size="small"
          color="secondary"
          sx={{
            p: "3px 9px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            ":hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
};
