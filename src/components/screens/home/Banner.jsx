import { Box, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Banner.webp"}
        height={"90vh"}
        width={"100vw"}
        display={"block"}
        sx={{ objectFit: "cover" }}
      />
      <Box position={"absolute"} top={"40%"} left={"10%"} data-aos="fade-up">
        <Box
          component={"img"}
          src={"/img/BannerText.webp"}
          width={"60%"}
          sx={{ objectFit: "contain" }}
        />
        <Typography mt={1} color={"white"} fontSize={18} fontWeight={"bold"}>
          Where Flavor Meets Imagination.
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
