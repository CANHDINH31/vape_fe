import { Box, Typography } from "@mui/material";
import React from "react";

function Real() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Real.webp"}
        height={"90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />
      <Box
        position={"absolute"}
        top={"50%"}
        left={"10%"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Typography
          color={"white"}
          fontSize={"3rem"}
          lineHeight={1}
          fontWeight={"bold"}
        >
          Unleash the Flavor for
        </Typography>
        <Box
          fontSize={"4.5rem"}
          lineHeight={1.2}
          fontWeight={"bold"}
          sx={{
            backgroundImage: "linear-gradient(to bottom,#ef0969,#d804ae)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Real.
        </Box>
        <Typography
          fontSize={20}
          lineHeight={1.3}
          color={"white"}
          marginTop={"1.3rem"}
          fontWeight={500}
        >
          Rich and restorative taste, all designed for you to
          <br />
          join the most original vaping feast and dive into
          <br />
          the world of OX PASSION.
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        top={"50%"}
        right={"18%"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Box
          component={"img"}
          width={398}
          height={516}
          src={"/img/RealVape.webp"}
          sx={{ objectFit: "contain" }}
          zIndex={1}
        />
      </Box>
    </Box>
  );
}

export default Real;
