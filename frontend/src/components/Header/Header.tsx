import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import blog from "../../assets/Logo/blog.png";

import { DarkMode as DarkIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Link to="/">
            <img
              src={blog}
              alt="Logo"
              style={{ height: 37, marginRight: 2, borderRadius: 11 }}
            />
          </Link>
        </Box>
        <Box>
          <IconButton color="inherit">
            <DarkIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
