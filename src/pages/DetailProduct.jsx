import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Container, Box, Typography, Grid } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import DetailProductImg from "../components/screens/detail-product/DetailProductImg";
import InfoDetailProduct from "../components/screens/detail-product/InfoDetailProduct";
import { useParams } from "react-router-dom";
import {
  addViews,
  getProductById,
  listRelatedVideo,
} from "../utils/api/product";
import ProductCard from "../../src/components/screens/product/ProductCard";

function DetailProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [arrRelatedVideo, setArrRelatedVideo] = useState([]);

  useEffect(() => {
    const handleAddViews = async () => {
      try {
        await addViews(id);
      } catch (error) {
        console.log(error);
      }
    };

    const getData = async () => {
      try {
        const res = await getProductById(id);
        setData(res?.data);
      } catch (error) {}
    };

    const getRelatedVideo = async () => {
      try {
        const res = await listRelatedVideo(id);
        setArrRelatedVideo(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    handleAddViews();
    getRelatedVideo();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              <Grid item xs={12} sm={12} md={6} lg={6} zIndex={2}>
                <DetailProductImg
                  data={[data?.url1, data?.url2, data?.url3, data?.url4]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <InfoDetailProduct zIndex1={1} data={data} />
              </Grid>
            </Grid>
          </Box>
          <Typography
            mt={8}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ xs: 18, sm: 24 }}
          >
            SẢN PHẨM LIÊN QUAN
          </Typography>
          <Box mt={{ xs: 2, sm: 4 }}>
            <Grid container spacing={4}>
              {arrRelatedVideo.map((e) => (
                <Grid item xs={6} sm={6} md={3} lg={3} key={e?._id}>
                  <ProductCard item={e} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default DetailProduct;
