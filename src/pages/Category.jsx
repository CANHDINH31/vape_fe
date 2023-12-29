import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Container, Box, Grid } from "@mui/material";
import MainProduct from "../components/screens/product/MainProduct";
// import Filter from "../components/screens/product/Filter";

function Category() {
  return (
    <MainLayout showWarning={false}>
      <Container>
        <Box py={4}>
          <Grid container>
            {/* <Grid item xs={3}>
              <Filter />
            </Grid> */}
            <Grid item xs={12}>
              <MainProduct />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default Category;
