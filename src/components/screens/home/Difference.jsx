import { Box, Typography } from "@mui/material";
import React from "react";

function Difference() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Difference.webp"}
        height={"100vh"}
        sx={{ objectFit: "contain" }}
      />
      <Box
        position={"absolute"}
        top={"8%"}
        right={"50%"}
        sx={{ transform: "translateX(50%)" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography fontSize={"3rem"} fontWeight={"bold"} lineHeight={1}>
          Breathe in, Taste the
        </Typography>
        <Box
          sx={{
            backgroundImage: "linear-gradient(to right,#2af29c,#02a2fa)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            fontSize: "4rem",
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          Difference.
        </Box>
        <Typography textAlign={"center"} mt={4} fontSize={24}>
          After testing numerous devices and researching feedback from countless
          users, we've
          <br />
          innovated and crafted the flavors that are not only more
          vaper-friendly, but also
          <br />
          enhance the overall vaping experience.
        </Typography>
      </Box>
    </Box>
  );
}

export default Difference;
