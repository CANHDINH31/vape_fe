import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainFavourite() {
  const { user } = useSelector((state) => state?.user);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/");
  }, [user]);

  console.log(user);

  return (
    <Box>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={24}>
        MY FAVOURITE
      </Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          {user?.favourite?.map((item) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={item?._id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainFavourite;
