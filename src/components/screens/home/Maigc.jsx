import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Magic() {
  const isMoblie = useMediaQuery("(max-width:600px)");

  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={isMoblie ? "/img/MagicMB.webp" : "/img/Magic.webp"}
        height={"90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />
      <Box
        position={"absolute"}
        top={isMoblie ? "18%" : "50%"}
        right={isMoblie ? "unset" : "10%"}
        width={isMoblie ? "100%" : "unset"}
        sx={{ transform: "translateY(-50%)" }}
      >
        {!isMoblie ? (
          <Typography
            fontSize={"3rem"}
            lineHeight={1}
            fontWeight={"bold"}
            data-aos="fade-up"
          >
            Magic in Every
            <Box component={"span"} color={"white"} fontSize={"4.5rem"}>
              {" "}
              Cloud.
            </Box>
          </Typography>
        ) : (
          <>
            <Typography
              fontSize={"1.8rem"}
              fontWeight={"bold"}
              data-aos="fade-up"
              textAlign={"center"}
              color={"white"}
            >
              Magic in Every
            </Typography>
            <Typography
              fontSize={"2.5rem"}
              color={"white"}
              textAlign={"center"}
              fontWeight={"bold"}
              data-aos="fade-up"
            >
              Cloud.
            </Typography>
          </>
        )}
        {!isMoblie ? (
          <Typography
            fontSize={20}
            lineHeight={1.3}
            mt={"1.5rem"}
            fontWeight={500}
            data-aos="fade-up"
          >
            With a smooth vaping and gentle throat hit -- OX PASSION
            <br />
            promises to deliver a fantastic and delightful sensory experience.
          </Typography>
        ) : (
          <Typography
            textAlign={"center"}
            mt={3}
            fontSize={{ xs: 12, sm: 20 }}
            whiteSpace={"normal"}
            fontWeight={500}
            data-aos="fade-up"
            color={"white"}
          >
            With a smooth vaping and gentle throat hit -- OX
            <br />
            PASSION promises to deliver a fantastic and delightful
            <br />
            sensory experience.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Magic;
