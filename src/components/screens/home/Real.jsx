import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Real() {
  const isMoblie = useMediaQuery("(max-width:600px)");
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={isMoblie ? "/img/RealMB.webp" : "/img/Real.webp"}
        height={isMoblie ? "80vh" : "90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />
      <Box
        position={"absolute"}
        top={isMoblie ? "18%" : "50%"}
        left={isMoblie ? "unset" : "10%"}
        width={isMoblie ? "100%" : "unset"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Typography
          color={"white"}
          fontSize={{ xs: "1.8rem", sm: "2.6rem" }}
          lineHeight={{ xs: 1.7, sm: 1 }}
          fontWeight={"bold"}
          data-aos="fade-up"
          textAlign={{ xs: "center", sm: "unset" }}
        >
          Unleash the Flavor for
        </Typography>
        <Box
          lineHeight={1.2}
          fontWeight={"bold"}
          sx={{
            backgroundImage: "linear-gradient(to bottom,#ef0969,#d804ae)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
          fontSize={{ xs: "2.5rem", sm: "3rem" }}
          data-aos="fade-up"
          textAlign={{ xs: "center", sm: "unset" }}
        >
          Real.
        </Box>
        {!isMoblie ? (
          <Typography
            fontSize={20}
            lineHeight={1.3}
            color={"white"}
            marginTop={"1.3rem"}
            fontWeight={500}
            data-aos="fade-up"
          >
            Rich and restorative taste, all designed for you to
            <br />
            join the most original vaping feast and dive into
            <br />
            the world of OX PASSION.
          </Typography>
        ) : (
          <Typography
            fontSize={{ xs: 12, sm: 20 }}
            lineHeight={1.3}
            color={"white"}
            marginTop={"1.3rem"}
            fontWeight={500}
            data-aos="fade-up"
            textAlign={"center"}
          >
            Rich and restorative taste, all designed for you to join the
            <br />
            most original vaping feast and dive into the world of <br />
            OX PASSION.
          </Typography>
        )}
      </Box>
      <Box
        position={"absolute"}
        top={isMoblie ? "65%" : "50%"}
        right={"18%"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Box
          component={"img"}
          width={isMoblie ? 250 : 398}
          src={isMoblie ? "/img/RealVapeMB.webp" : "/img/RealVape.webp"}
          sx={{ objectFit: "contain" }}
          zIndex={1}
          data-aos="zoom-in"
        />
      </Box>
    </Box>
  );
}

export default Real;
