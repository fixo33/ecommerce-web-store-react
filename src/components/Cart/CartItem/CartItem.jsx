import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

import styles from "./styles";
import useClasses from "../../../useClasses";

function CartItem({ item }) {
  const classes = useClasses(styles);

  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.line_total.formatted_width_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button size="small" color="primary">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button size="small" color="primary">
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
