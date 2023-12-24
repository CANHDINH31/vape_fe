import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Container, Box, Typography, Grid } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import DetailProductImg from "../components/screens/detail-product/DetailProductImg";
import InfoDetailProduct from "../components/screens/detail-product/InfoDetailProduct";

function DetailProduct() {
  return (
    <MainLayout showWarning={false}>
      <Container>
        <Box py={4}>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Typography
              fontSize={14}
              fontWeight={500}
              lineHeight={1}
              color={"#000"}
            >
              Chi tiết
            </Typography>
            <IoIosArrowForward fontSize={12} />
            <Typography
              fontSize={14}
              fontWeight={500}
              lineHeight={1}
              color={"#222"}
            >
              OXVA XLIM SQ Pro Kit
            </Typography>
          </Box>
          <Box mt={4}>
            <Grid container spacing={4}>
              <Grid item xs={6} zIndex={2}>
                <DetailProductImg />
              </Grid>
              <Grid item xs={6}>
                <InfoDetailProduct zIndex1={1} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default DetailProduct;
