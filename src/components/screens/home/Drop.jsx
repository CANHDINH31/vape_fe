import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Drop() {
  const isMoblie = useMediaQuery("(max-width:600px)");

  return (
    <Box position={"relative"}>
      <Box
        component={"video"}
        src={
          "https://cdn.shopify.com/videos/c/o/v/a7466b8fd90745788a78ef2d9515df01.mp4"
        }
        height={isMoblie ? "80vh" : "90vh"}
        width={"100vw"}
        sx={{ objectFit: "cover", objectPosition: { xs: "77%", sm: "unset" } }}
        display={"block"}
        autoPlay={true}
        loop
        controls={false}
      />
      <Box
        position={"absolute"}
        top={isMoblie ? "18%" : "50%"}
        left={isMoblie ? "unset" : "10%"}
        width={isMoblie ? "100%" : "unset"}
        sx={{ transform: "translateY(-50%)" }}
        textAlign={isMoblie ? "center" : "unset"}
      >
        <Typography
          fontSize={{ xs: "1.8rem", sm: "2.6rem" }}
          lineHeight={{ xs: 1.7, sm: 1 }}
          fontWeight={"bold"}
          color={"white"}
          data-aos="fade-up"
        >
          Professionalism in{" "}
        </Typography>
        <Typography
          fontSize={{ xs: "1.8rem", sm: "2.6rem" }}
          lineHeight={1}
          fontWeight={"bold"}
          color={"white"}
          data-aos="fade-up"
        >
          Every{" "}
          <Box
            component={"span"}
            color={"white"}
            fontSize={{ xs: "2.5rem", sm: "3rem" }}
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
        {!isMoblie ? (
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
            Using high-quality and natural ingredients, OX
            <br />
            PASSION has been persevering in production with
            <br />
            care, ensuring absolute safety in every puff.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Drop;
