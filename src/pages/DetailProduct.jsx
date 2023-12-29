import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Container, Box, Typography, Grid } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import DetailProductImg from "../components/screens/detail-product/DetailProductImg";
import InfoDetailProduct from "../components/screens/detail-product/InfoDetailProduct";
import { useParams } from "react-router-dom";
import { addViews, getProductById } from "../utils/api/product";

function DetailProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const handleAddViews = async () => {
      try {
        await addViews(id);
      } catch (error) {
        console.log(error);
      }
    };

    handleAddViews();

    const getData = async () => {
      try {
        const res = await getProductById(id);
        setData(res?.data);
      } catch (error) {}
    };
    getData();
    window.scrollTo(0, 0);
  }, [id]);

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
              {data?.name}
            </Typography>
          </Box>
          <Box mt={4}>
            <Grid container spacing={4}>
              <Grid item xs={6} zIndex={2}>
                <DetailProductImg
                  data={[data?.url1, data?.url2, data?.url3, data?.url4]}
                />
              </Grid>
              <Grid item xs={6}>
                <InfoDetailProduct zIndex1={1} data={data} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default DetailProduct;
