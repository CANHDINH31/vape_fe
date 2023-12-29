import {
  Box,
  Typography,
  Drawer,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  // HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { listMenu } from "../../../utils/api/category";

function Header() {
  const navigate = useNavigate();

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [arrCategory, setArrCategory] = useState([]);

  useEffect(() => {
    const getListCategory = async () => {
      const res = await listMenu();
      setArrCategory(res.data);
    };
    getListCategory();
  }, []);

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
            src={"/img/Logo.png"}
            height={50}
            sx={{ objectFit: "contain" }}
            onClick={() => navigate("/")}
          />
          <Box display={"flex"} alignItems={"center"} gap={4}>
            <Typography
              color={"white"}
              fontSize={12}
              fontWeight={500}
              onClick={() => navigate("/")}
            >
              TRANG CHỦ
            </Typography>
            {arrCategory?.map((e, index) => (
              <Typography
                key={index}
                color={"white"}
                fontSize={12}
                fontWeight={500}
                onClick={() => navigate(`/category/${e._id}`)}
              >
                {e?.name?.toUpperCase()}
              </Typography>
            ))}
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            bgcolor={"white"}
            gap={2}
            padding={"8px 16px"}
            borderRadius={"18px"}
          >
            {/* <HiOutlineShoppingBag fontSize={24} />
            <Box width={"1px"} height={20} bgcolor={"#cecece"} /> */}
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
