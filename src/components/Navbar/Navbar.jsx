import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import logo from "../../assets/commerce.png";
import styles from "./styles";
import useClasses from "../../useClasses";

const Navbar = () => {
  const classes = useClasses(styles);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            <img src={logo} alt="Commerce.js" height="30px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
