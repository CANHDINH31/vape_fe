import { Box, Typography } from "@mui/material";
import React from "react";

function Difference() {
  return (
    <Box position={"relative"}>
      <Box
        component={"img"}
        src={"/img/Difference.webp"}
        height={"90vh"}
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
      >
        <Typography
          fontSize={"2.6rem"}
          fontWeight={"bold"}
          lineHeight={1}
          data-aos="fade-up"
        >
          Breathe in, Taste the
        </Typography>
        <Box
          sx={{
            backgroundImage: "linear-gradient(to right,#2af29c,#02a2fa)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            fontSize: "3rem",
            fontWeight: "bold",
            lineHeight: 1,
          }}
          data-aos="fade-up"
        >
          Difference.
        </Box>
        <Typography
          textAlign={"center"}
          mt={3}
          fontSize={20}
          whiteSpace={"nowrap"}
          fontWeight={500}
          data-aos="fade-up"
        >
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
