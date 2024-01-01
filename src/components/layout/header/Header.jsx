import {
  Box,
  Typography,
  Drawer,
  Divider,
  TextField,
  Button,
  Popover,
  Badge,
  useMediaQuery,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  // HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { listMenu } from "../../../utils/api/category";
import { create, loginAccount } from "../../../utils/api/user";
import { notify } from "../../../utils/helpers/notify";
import { useDispatch } from "react-redux";
import { login, logout } from "../../../utils/redux/userSlice";
import { useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline, IoHomeOutline, IoHeart } from "react-icons/io5";
import { IoIosList, IoIosLogIn } from "react-icons/io";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { FaRegUserCircle } from "react-icons/fa";
import { LuUserCheck } from "react-icons/lu";

const MenuItem = styled(Box)({
  padding: 16,
  borderBottom: "1px solid rgba(34,34,34,0.2)",
  display: "flex",
  gap: 8,
  alignItems: "center",
  "&:hover": {
    background: "rgba(34,34,34,0.1)",
  },
});

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.user);

  const isMoblie = useMediaQuery("(max-width:600px)");

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [isOpenDrawerMB, setIsOpenDrawerMB] = useState(false);

  const [arrCategory, setArrCategory] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      await create({ name, password, username });
      setIsLogin(true);
      setName("");
      setUsername("");
      setPassword("");
      notify("success", "Đăng kí tài khoản thành công");
      setIsOpenDrawerMB(false);
    } catch (error) {
      notify("error", error?.response?.data?.message);
    }
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await loginAccount({ username, password });
      dispatch(login(res.data));
      setUsername("");
      setPassword("");
      setIsOpenDrawer(false);
      setAnchorEl(null);
      notify("success", "Đăng nhập thành công");
      setIsOpenDrawerMB(false);
    } catch (error) {
      notify("error", error?.response?.data?.message);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    notify("success", "Tài khoản đã được đăng xuất");
  };

  const handleFavourite = () => {
    if (!user) {
      notify("warn", "Bạn phải đăng nhập để sử dụng chức năng này");
    } else {
      navigate("/my-favourite");
    }
  };

  useEffect(() => {
    const getListCategory = async () => {
      const res = await listMenu();
      setArrCategory(res.data);
    };
    getListCategory();
  }, []);

  return (
    <>
      {!isMoblie ? (
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
              <Badge
                badgeContent={user?.favourite?.length}
                color="info"
                onClick={handleFavourite}
              >
                <HiOutlineHeart fontSize={24} />
              </Badge>

              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Box width={"1px"} height={20} bgcolor={"#cecece"} />
                {user?.name ? (
                  <>
                    <Button
                      variant="contained"
                      size="small"
                      color="text"
                      startIcon={<HiOutlineUser fontSize={24} />}
                      onClick={(event) => setAnchorEl(event.currentTarget)}
                    >
                      {user?.name}
                    </Button>
                    <Popover
                      sx={{ marginTop: 1 }}
                      open={Boolean(anchorEl)}
                      anchorEl={anchorEl}
                      onClose={() => setAnchorEl(null)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Box sx={{ cursor: "pointer" }}>
                        {user?.role == "1" && (
                          <>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                              width={150}
                              py={1}
                              px={2}
                              onClick={() => navigate("/admin/user")}
                            >
                              <IoSettingsOutline fontSize={24} />
                              <Typography fontSize={14} fontWeight={500}>
                                Quản trị viên
                              </Typography>
                            </Box>
                            <Divider />
                          </>
                        )}

                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          width={150}
                          py={1}
                          px={2}
                          onClick={handleLogout}
                        >
                          <IoIosLogOut fontSize={24} />
                          <Typography fontSize={14} fontWeight={500}>
                            Đăng xuất
                          </Typography>
                        </Box>
                      </Box>
                    </Popover>
                  </>
                ) : (
                  <HiOutlineUser
                    fontSize={24}
                    onClick={() => setIsOpenDrawer(true)}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          bgcolor={"#000"}
          display={"flex"}
          justifyContent={"space-between"}
          py={1}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          position={"sticky"}
          top={0}
          left={0}
          right={0}
          zIndex={999}
          borderTop={"1px solid rgb(61, 61, 61)"}
          borderBottom={"1px solid rgb(61, 61, 61)"}
          paddingX={1}
        >
          <IoIosList
            fontSize={38}
            color={"white"}
            onClick={() => setIsOpenDrawerMB(true)}
          />
          <Box
            component={"img"}
            src={"/img/Logo.png"}
            height={60}
            sx={{ objectFit: "contain" }}
            onClick={() => navigate("/")}
          />

          <Badge
            badgeContent={user?.favourite?.length}
            color="info"
            onClick={handleFavourite}
          >
            <HiOutlineHeart fontSize={38} color={"white"} />
          </Badge>
        </Box>
      )}

      {/* DRAWER AUTH */}
      <Drawer
        anchor={"right"}
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <Box
          sx={{ width: { xs: "80vw", md: "25vw" } }}
          component={"form"}
          onSubmit={!isLogin ? handleRegister : handleLogin}
        >
          <Box py={2} px={1}>
            <Typography fontSize={18} fontWeight={600}>
              {isLogin ? "LOGIN" : "REGISTER"}
            </Typography>
          </Box>
          <Divider />
          <Box px={1} py={4}>
            {!isLogin && (
              <Box>
                <TextField
                  fullWidth
                  size="medium"
                  label="Họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Box>
            )}

            <Box mt={4}>
              <TextField
                fullWidth
                size="medium"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Box>
            <Box mt={4}>
              <TextField
                fullWidth
                size="medium"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
            </Box>
            <Box mt={4}>
              {!isLogin ? (
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  size="large"
                  type="submit"
                >
                  Register
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  size="large"
                  type="submit"
                >
                  Login
                </Button>
              )}
            </Box>
            <Box mt={4} sx={{ cursor: "pointer" }} textAlign={"center"}>
              {!isLogin ? (
                <Box textAlign={"center"}>
                  <Typography fontSize={14} fontWeight={600} mb={1}>
                    Already have an account ?
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    Login now
                  </Button>
                </Box>
              ) : (
                <Box textAlign={"center"}>
                  <Typography fontSize={14} fontWeight={600} mb={1}>
                    Don't have an Account ?
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    Register here
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* DRAWER MB */}
      <Drawer
        anchor={"left"}
        open={isOpenDrawerMB}
        onClose={() => setIsOpenDrawerMB(false)}
      >
        <Box width={"80vw"}>
          <Box
            p={2}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Box
              component={"img"}
              src={"/img/Logo.png"}
              width={80}
              sx={{ objectFit: "contain" }}
            />
            <Box onClick={() => setIsOpenDrawerMB(false)}>
              <CloseOutlinedIcon sx={{ color: "red" }} />
            </Box>
          </Box>
          {user?.name && (
            <Box
              p={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <LuUserCheck fontSize={24} />
                <Typography fontWeight={500} fontSize={14}>
                  {user?.name.toUpperCase()}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setIsOpenDrawerMB(false);
                  handleLogout();
                }}
              >
                Đăng xuất
              </Button>
            </Box>
          )}

          <MenuItem borderTop={"1px solid rgba(34,34,34,0.2)"}>
            <IoHomeOutline fontSize={24} />
            <Typography
              fontSize={14}
              fontWeight={500}
              color={"#222"}
              onClick={() => navigate("/")}
            >
              TRANG CHỦ
            </Typography>
          </MenuItem>
          {arrCategory?.map((e, index) => (
            <MenuItem key={index}>
              <Typography
                fontSize={14}
                fontWeight={500}
                color={"#222"}
                onClick={() => navigate(`/category/${e._id}`)}
              >
                {e?.name?.toUpperCase()}
              </Typography>
            </MenuItem>
          ))}

          {user?.role == "1" && (
            <MenuItem>
              <IoSettingsOutline fontSize={24} />
              <Typography
                fontSize={14}
                fontWeight={500}
                color={"#222"}
                onClick={() => navigate("/my-favourite")}
              >
                QUẢN TRỊ VIÊN
              </Typography>
            </MenuItem>
          )}

          {user && (
            <MenuItem>
              <IoHeart fontSize={24} color="red" />
              <Typography
                fontSize={14}
                fontWeight={500}
                color={"#222"}
                onClick={() => navigate("/my-favourite")}
              >
                DANH MỤC YÊU THÍCH
              </Typography>
            </MenuItem>
          )}

          <Box p={2}>
            {!user && (
              <Button
                variant="outlined"
                fullWidth
                onClick={() => {
                  setIsOpenDrawerMB(false);
                  setIsOpenDrawer(true);
                }}
                startIcon={<IoIosLogIn />}
              >
                Đăng nhập
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
