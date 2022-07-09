import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import logo from "../../assets/commerce.png";

const Navbar = () => {
  const classes = {}; //useClasses(styles);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
