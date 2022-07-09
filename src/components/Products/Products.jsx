import React from "react";
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$100", image: "https://images-na.ssl-images-amazon.com/images/I/71ZzCwQOg1L.__AC_SX395_SY395_QL70_FMwebp_.jpg" },
  { id: 2, name: "Macbook", description: "Apple macbook.", price: "$2000", image: "https://images-na.ssl-images-amazon.com/images/I/61aUBxqc5PL.__AC_SY445_SX342_QL70_FMwebp_.jpg" },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
