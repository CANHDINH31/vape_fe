import { Box, Typography } from "@mui/material";
import React from "react";

function Product() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Product.webp"}
        height={"90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />
      <Box
        position={"absolute"}
        top={"4%"}
        display={"flex"}
        alignItems={"flex-end"}
        justifyContent={"center"}
        gap={2}
        width={"100%"}
        data-aos="fade-up"
      >
        <Typography color={"white"} fontWeight={"bold"} fontSize={"2rem"}>
          PRODUCT SPECIFICATION
        </Typography>
        <Typography color={"white"} fontWeight={500} fontSize={14}>
          Nicotine Strength: 38mg/58mg | E-juice Capacity: 30ml
          <br />
          Dimension: 30*30*87mm | Weight: 46.5g | Quantity: 10packs/Box
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
