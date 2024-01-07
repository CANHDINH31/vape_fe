import React, { useEffect, useState } from "react";
import Banner from "../components/screens/home/Banner";
import Difference from "../components/screens/home/Difference";
import Real from "../components/screens/home/Real";
import Magic from "../components/screens/home/Maigc";
import Drop from "../components/screens/home/Drop";
import Flavor from "../components/screens/home/Flavor";
import Product from "../components/screens/home/Product";
import MainLayout from "../components/layout/MainLayout";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { listCategory } from "../utils/api/category";
import ProductCard from "../components/screens/product/ProductCard";

function Home() {
  const isMoblie = useMediaQuery("(max-width:600px)");
  const [arrCategory, setArrCategory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await listCategory();
        setArrCategory(res.data);
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, []);

  return (
    <MainLayout>
      {isMoblie ? (
        <>
          <Banner />
          {arrCategory?.map((e) => {
            if (e?.product?.length > 0) {
              const productsToRender = e.product.slice(0, 6);
              return (
                <Box key={e._id} mt={8}>
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={18}
                  >
                    {e?.name}
                  </Typography>
                  <Box mt={2}>
                    <Grid container spacing={4}>
                      {productsToRender.map((i) => (
                        <Grid item xs={6} sm={6} md={3} lg={3} key={i._id}>
                          <ProductCard item={i} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box mt={2} textAlign={"center"}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      href={`/category/${e._id}`}
                    >
                      Xem thêm
                    </Button>
                  </Box>
                </Box>
              );
            }
            return null;
          })}
        </>
      ) : (
        <>
          <Banner />
          <Difference />
          <Real />
          <Magic />
          <Drop />
          <Flavor />
          <Product />
        </>
      )}
    </MainLayout>
  );
}

export default Home;
