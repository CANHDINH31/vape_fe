import {
  Box,
  Typography,
  Drawer,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

  return (
    <>
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
            <Typography
              color={"white"}
              fontSize={12}
              fontWeight={500}
              onClick={() => navigate("/product")}
            >
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
            <HiOutlineHeart fontSize={24} />
            <Box width={"1px"} height={20} bgcolor={"#cecece"} />
            <HiOutlineUser
              fontSize={24}
              onClick={() => setIsOpenDrawer(true)}
            />
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor={"right"}
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <Box sx={{ width: "20vw" }}>
          <Box py={2} px={1}>
            <Typography fontSize={18} fontWeight={600}>
              REGISTER
            </Typography>
          </Box>
          <Divider />
          <Box px={1} py={4}>
            <Box>
              <TextField fullWidth size="medium" label="Họ và tên" />
            </Box>
            <Box mt={4}>
              <TextField fullWidth size="medium" label="Username" />
            </Box>
            <Box mt={4}>
              <TextField fullWidth size="medium" label="Password" />
            </Box>
            <Box mt={4}>
              <TextField fullWidth size="medium" label="Retype Password" />
            </Box>
            <Box mt={4}>
              <Button variant="contained" color="error" fullWidth size="medium">
                Register
              </Button>
            </Box>
            <Box mt={4} sx={{ cursor: "pointer" }} textAlign={"center"}>
              <Typography fontSize={14} fontWeight={500}>
                Already have an account? Login here
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
