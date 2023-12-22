import { Box, Typography } from "@mui/material";
import React from "react";

function Drop() {
  return (
    <Box position={"relative"}>
      <Box
        component={"video"}
        src={
          "https://cdn.shopify.com/videos/c/o/v/a7466b8fd90745788a78ef2d9515df01.mp4"
        }
        height={"90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover" }}
        display={"block"}
        autoPlay={true}
        loop
        muted
      />
      <Box
        position={"absolute"}
        top={"50%"}
        left={"10%"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Typography
          fontSize={"3rem"}
          lineHeight={1}
          fontWeight={"bold"}
          color={"white"}
          data-aos="fade-up"
        >
          Professionalism in{" "}
        </Typography>
        <Typography
          fontSize={"3rem"}
          lineHeight={1}
          fontWeight={"bold"}
          color={"white"}
          data-aos="fade-up"
        >
          Every{" "}
          <Box
            component={"span"}
            color={"white"}
            fontSize={"4.5rem"}
            sx={{
              backgroundImage: "linear-gradient(135deg,#ffcb41,#ff7f00)",
              "background-clip": "text",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Drop
          </Box>
        </Typography>
        <Typography
          fontSize={20}
          lineHeight={1.3}
          mt={"2rem"}
          color={"white"}
          fontWeight={500}
          data-aos="fade-up"
        >
          Using high-quality and natural ingredients, OX
          <br />
          PASSION has been persevering in production with
          <br />
          care, ensuring absolute safety in every puff.
        </Typography>
      </Box>
    </Box>
  );
}

export default Drop;
