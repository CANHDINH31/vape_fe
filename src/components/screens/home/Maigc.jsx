import { Box, Typography } from "@mui/material";
import React from "react";

function Magic() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Magic.webp"}
        height={"90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
      />
      <Box
        position={"absolute"}
        top={"50%"}
        right={"10%"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Typography fontSize={"3rem"} lineHeight={1} fontWeight={"bold"}>
          Magic in Every{" "}
          <Box component={"span"} color={"white"} fontSize={"4.5rem"}>
            Cloud.
          </Box>
        </Typography>
        <Typography fontSize={"1.5rem"} lineHeight={1.3} mt={"1.5rem"}>
          With a smooth vaping and gentle throat hit -- OX PASSION
          <br />
          promises to deliver a fantastic and delightful sensory experience.
        </Typography>
      </Box>
    </Box>
  );
}

export default Magic;
