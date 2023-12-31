import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Difference() {
  const isMoblie = useMediaQuery("(max-width:600px)");

  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={isMoblie ? "/img/DifferenceMB.webp" : "/img/Difference.webp"}
        height={isMoblie ? "80vh" : "90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />

      <Box
        position={"absolute"}
        top={"8%"}
        right={"50%"}
        sx={{ transform: "translateX(50%)" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
      >
        <Typography
          fontSize={{ xs: "1.8rem", sm: "2.6rem" }}
          fontWeight={"bold"}
          lineHeight={{ xs: 1.7, sm: 1 }}
          data-aos="fade-up"
        >
          Breathe in, Taste the
        </Typography>
        <Box
          sx={{
            backgroundImage: "linear-gradient(to right,#2af29c,#02a2fa)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",

            fontWeight: "bold",
            lineHeight: 1,
          }}
          fontSize={{ xs: "2.5rem", sm: "3rem" }}
          data-aos="fade-up"
        >
          Difference.
        </Box>
        {!isMoblie ? (
          <Typography
            textAlign={"center"}
            mt={3}
            fontSize={{ xs: 16, sm: 20 }}
            whiteSpace={"normal"}
            fontWeight={500}
            data-aos="fade-up"
          >
            After testing numerous devices and researching feedback from
            countless users, we've
            <br />
            innovated and crafted the flavors that are not only more
            vaper-friendly, but also
            <br />
            enhance the overall vaping experience.
          </Typography>
        ) : (
          <Typography
            textAlign={"center"}
            mt={3}
            fontSize={{ xs: 12, sm: 20 }}
            whiteSpace={"normal"}
            fontWeight={500}
            data-aos="fade-up"
          >
            After testing numerous devices and researching
            <br /> feedback from countless users, we've innovated and
            <br />
            crafted the flavors that are not only more vaper-friendly,
            <br />
            but also enhance the overall vaping experience.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Difference;
