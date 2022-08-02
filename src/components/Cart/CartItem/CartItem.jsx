import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

import styles from "./styles";
import useClasses from "../../../useClasses";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useClasses(styles);

  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button size="small" color="primary" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button size="small" color="primary" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
