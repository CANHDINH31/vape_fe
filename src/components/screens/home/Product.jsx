import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Product() {
  const isMoblie = useMediaQuery("(max-width:600px)");

  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={isMoblie ? "/img/ProductMB.webp" : "/img/Product.webp"}
        height={isMoblie ? "80vh" : "90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />
      <Box
        position={"absolute"}
        top={"4%"}
        display={"flex"}
        alignItems={isMoblie ? "center" : "flex-end"}
        justifyContent={"center"}
        gap={2}
        width={"100%"}
        data-aos="fade-up"
        textAlign={isMoblie ? "center" : "unset"}
        flexDirection={isMoblie ? "column" : "row"}
      >
        <Typography color={"white"} fontWeight={"bold"} fontSize={"2rem"}>
          PRODUCT SPECIFICATION
        </Typography>
        {!isMoblie ? (
          <Typography color={"white"} fontWeight={500} fontSize={14}>
            Nicotine Strength: 38mg/58mg | E-juice Capacity: 30ml
            <br />
            Dimension: 30*30*87mm | Weight: 46.5g | Quantity: 10packs/Box
          </Typography>
        ) : (
          <Typography color={"white"} fontWeight={500} fontSize={14}>
            Nicotine Strength: 38mg/58mg
            <br />
            E-juice Capacity: 30ml
            <br />
            Dimension: 30*30*87mm <br /> Weight: 46.5g <br /> Quantity:
            10packs/Box
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Product;
