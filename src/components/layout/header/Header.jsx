import { Box, Typography } from "@mui/material";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineGlobal } from "react-icons/ai";

function Header() {
  return (
    <Box
      bgcolor={"#000"}
      display={"flex"}
      justifyContent={"center"}
      py={1}
      sx={{ cursor: "pointer" }}
      position={"sticky"}
      top={0}
      left={0}
      right={0}
      zIndex={999}
      borderTop={"1px solid rgb(61, 61, 61)"}
      borderBottom={"1px solid rgb(61, 61, 61)"}
    >
      <Box
        width={"88%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          component={"img"}
          src={
            "https://cdn.shopifycdn.net/s/files/1/0502/8033/3505/files/oxva_logo_red.svg?v=1700030061"
          }
          width={144}
          sx={{ objectFit: "contain" }}
        />
        <Box display={"flex"} alignItems={"center"} gap={4}>
          <Typography color={"white"} fontSize={12} fontWeight={500}>
            PRODUCTS
          </Typography>
          <Typography color={"white"} fontSize={12} fontWeight={500}>
            LIQUID
          </Typography>
          <Typography color={"white"} fontSize={12} fontWeight={500}>
            DISPOSABLE
          </Typography>
          <Typography color={"white"} fontSize={12} fontWeight={500}>
            EXPLORE OXVA
          </Typography>
          <Typography color={"white"} fontSize={12} fontWeight={500}>
            SUPPORT
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          bgcolor={"white"}
          gap={2}
          padding={"8px 16px"}
          borderRadius={"18px"}
        >
          <HiOutlineShoppingBag fontSize={24} />
          <Box width={"1px"} height={20} bgcolor={"#cecece"} />
          <AiOutlineGlobal fontSize={24} />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
