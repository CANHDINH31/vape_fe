import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

function MainProduct() {
  return (
    <Box>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={24}>
        BEST SELLER
      </Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainProduct;
