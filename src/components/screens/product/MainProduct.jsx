import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../../utils/api/category";
import { listTopView } from "../../../utils/api/product";

function MainProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [arrTopView, setArrTopView] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCategoryById(id);
        setData(res?.data);
      } catch (error) {}
    };

    const getTopViews = async () => {
      try {
        const res = await listTopView();
        setArrTopView(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    getTopViews();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Box>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={24}>
        {data?.name}
      </Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          {data?.product?.map((e) => (
            <Grid item xs={6} sm={6} md={3} lg={3} key={e?._id}>
              <ProductCard item={e} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography mt={8} textAlign={"center"} fontWeight={"bold"} fontSize={24}>
        TOP SẢN PHẨM CÓ LƯỢT XEM CAO NHẤT
      </Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          {arrTopView.map((e) => (
            <Grid item xs={6} sm={6} md={3} lg={3} key={e?._id}>
              <ProductCard item={e} isTop={true} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainProduct;
