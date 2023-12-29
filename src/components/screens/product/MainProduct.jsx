import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../../utils/api/category";

function MainProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCategoryById(id);
        setData(res?.data);
      } catch (error) {}
    };
    getData();
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
            <Grid item xs={4} key={e?._id}>
              <ProductCard item={e} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainProduct;
