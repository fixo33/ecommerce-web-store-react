import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

import styles from "./styles";
import useClasses from "../../useClasses";

const Cart = ({ cart }) => {
  const classes = useClasses(styles);
  //   const classes = {};
  const isEmpty = !cart?.line_items?.length;

  const EmptyCart = () => <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>;
  const FilledCard = () => (
    <>
      <Grid container spacing={3}>
        {(cart?.line_items || []).map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
            Empty Cart
          </Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" color="inherit">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCard />}
    </Container>
  );
};

export default Cart;
