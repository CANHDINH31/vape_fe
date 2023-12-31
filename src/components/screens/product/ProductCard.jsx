import { Box, Rating, Stack, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineEye,
} from "react-icons/hi2";
import { HiHeart } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../../utils/helpers/notify";
import { favourite } from "../../../utils/redux/userSlice";
import { updateUser } from "../../../utils/api/user";

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

function ProductCard({ item, isTop = false }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const handleFavourite = async (e, item) => {
    e.stopPropagation();
    if (!user) {
      notify("warn", "Bạn phải đăng nhập để sử dụng chức năng này");
    } else {
      let listIdFavourite = user?.favourite?.map((i) => i?._id);
      const index = user?.favourite?.findIndex((i) => i?._id === item?._id);
      if (index > -1) {
        listIdFavourite = listIdFavourite?.filter((i) => i?._id != item?._id);
        notify("success", "Xóa khỏi yêu thích thành công");
      } else {
        listIdFavourite.push(item?._id);
        notify("success", "Thêm vào yêu thích thành công");
      }
      try {
        await updateUser(user?._id, { favourite: listIdFavourite });
        dispatch(favourite(item));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper
      onClick={() => navigate(`/product/${item?._id}`)}
      display={{ xs: "flex", sm: "unset" }}
      flexDirection={{ xs: "column", sm: "unset" }}
      alignItems={{ xs: "center", sm: "unset" }}
    >
      <WrapImg>
        <Box component={"img"} src={item?.url1} className="img" />
        <Box className={"overlay"}>
          <WrapIcon>
            <HiOutlineEye />
          </WrapIcon>
          {/* <WrapIcon>
            <HiOutlineShoppingBag />
          </WrapIcon> */}
          <WrapIcon onClick={(e) => handleFavourite(e, item)}>
            {user?.favourite?.map((e) => e?._id)?.includes(item?._id) ? (
              <HiHeart width={28} color="red" />
            ) : (
              <HiOutlineHeart width={28} />
            )}
          </WrapIcon>
        </Box>
      </WrapImg>

      <Stack textAlign={"center"} gap={"2px"} mt={1} width={270}>
        <Typography fontSize={14} fontWeight={"bold"}>
          {item?.name}
        </Typography>
        <Typography fontSize={10} color="red" fontWeight={"bold"}>
          {item?.price > 0
            ? item?.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            : "Liên hệ để thông tin giá"}
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Rating size="small" value={5} />
          {isTop ? (
            <Typography fontSize={12} fontWeight={"bold"}>
              {item?.views} Lượt xem
            </Typography>
          ) : (
            <Typography fontSize={12} fontWeight={"bold"}>
              {item?.number} Sản phẩm
            </Typography>
          )}
        </Box>
      </Stack>
    </Wrapper>
  );
}

export default ProductCard;
