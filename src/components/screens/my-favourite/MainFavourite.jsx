import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../product/ProductCard";

function MainFavourite() {
  return (
    <Box>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={24}>
        MY FAVOURITE
      </Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainFavourite;
