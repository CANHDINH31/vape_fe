import { Box, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Banner.webp"}
        width={"100%"}
        display={"block"}
        sx={{ objectFit: "contain" }}
      />
      <Box position={"absolute"} top={"40%"} right={"10%"}>
        <Box
          component={"img"}
          src={"/img/BannerText.webp"}
          width={"60%"}
          sx={{ objectFit: "contain" }}
        />
        <Typography mt={2} color={"white"} fontSize={22} fontWeight={"bold"}>
          Where Flavor Meets Imagination.
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
