import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Banner() {
  const isMoblie = useMediaQuery("(max-width:600px)");

  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={isMoblie ? "/img/BannerMB.webp" : "/img/Banner.webp"}
        height={isMoblie ? "80vh" : "90vh"}
        width={"100vw"}
        display={"block"}
        sx={{ objectFit: "cover" }}
      />
      <Box
        position={"absolute"}
        top={isMoblie ? "10%" : "40%"}
        left={"10%"}
        data-aos="fade-up"
      >
        <Box
          component={"img"}
          src={isMoblie ? "/img/BannerTextMB.webp" : "/img/BannerText.webp"}
          width={isMoblie ? "100%" : "60%"}
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
