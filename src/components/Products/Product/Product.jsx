import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

import { styles } from "./styles";
import useClasses from "../../../useClasses";

const Product = ({ product, onAddToCart }) => {
  const classes = useClasses(styles);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} sx={{ backgroundSize: "contain" }} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardAcions}>
        <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
