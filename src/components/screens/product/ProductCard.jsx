import { Box, Rating, Stack, Typography, styled } from "@mui/material";
import React from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineEye,
} from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)({
  position: "relative",
  cursor: "pointer",

  "&:hover": {
    "& .overlay": {
      opacity: 1,
      background: "rgba(226, 226, 226,0.4)",
      visibility: "visible",
    },

    "& .img": {
      transform: "scale(1.25)",
    },
  },
});

const WrapImg = styled(Box)({
  position: "relative",
  cursor: "pointer",
  maxWidth: 270,
  maxHeight: 270,
  overflow: "hidden",

  "& .img": {
    display: "block",
    width: 270,
    height: 270,
    transition: "all 0.3s ease-in-out",
    objectFit: "cover",
  },

  "& .overlay": {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    gap: 16,
    padding: "4px 0",
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s, opacity 0.3s linear",
  },
});

const WrapIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  width: 36,
  height: 36,
  borderRadius: "50%",
  transition: "all 0.3s ease-in-out",
  "& svg": {
    color: "#000",
    fontSize: 20,
  },
  "&:hover": {
    background: "#000",
    "& svg": {
      color: "white",
    },
  },
});

function ProductCard() {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate("/product/1")}>
      <WrapImg>
        <Box component={"img"} src={"/img/Product1.webp"} className="img" />
        <Box className={"overlay"}>
          <WrapIcon>
            <HiOutlineEye />
          </WrapIcon>
          <WrapIcon>
            <HiOutlineShoppingBag />
          </WrapIcon>
          <WrapIcon>
            <HiOutlineHeart />
          </WrapIcon>
        </Box>
      </WrapImg>

      <Stack textAlign={"center"} gap={"2px"} mt={1}>
        <Typography fontSize={14} fontWeight={"bold"}>
          OXVA XLIM POD KIT
        </Typography>
        <Typography fontSize={10} color="red" fontWeight={"bold"}>
          1,000,000 VNĐ
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Rating size="small" value={5} />
          <Typography fontSize={12} fontWeight={"bold"}>
            16 IN STOCK
          </Typography>
        </Box>
      </Stack>
    </Wrapper>
  );
}

export default ProductCard;
