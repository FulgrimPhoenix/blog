import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { HeaderRoot } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderRoot position="static">
      <Toolbar>
        <Button size="small" color="primary">
          subscribe
        </Button>
        <Typography
          variant="h5"
          component="h2"
          sx={{ flexGrow: 2, textAlign: "center" }}
          color="primary"
        >
          Blog
        </Typography>
        <IconButton size="large" color="primary">
          <SearchIcon />
        </IconButton>
        <Button
          size="small"
          color="primary"
          sx={{
            p: "3px 9px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            ":hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          sign up
        </Button>
      </Toolbar>
    </HeaderRoot>
  );
};
