import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = (props) => (
  <AppBar position="static">
    <Toolbar variant="dense" >
      <Typography variant="h6" color="inherit" component="div">
        Radpair Assessment
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
