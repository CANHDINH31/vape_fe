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
import { IoIosFlash } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";

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
    transition: "all 0.3s ease-in-out",
    width: "100%",
    objectFit: "contain",
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

const FlashItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  background: "#ffe97a",
  borderRadius: 8,
  padding: "1px 8px",
  gap: 2,
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
          <WrapIcon>
            <HiOutlineShoppingBag />
          </WrapIcon>
          <WrapIcon onClick={(e) => handleFavourite(e, item)}>
            {user?.favourite?.map((e) => e?._id)?.includes(item?._id) ? (
              <HiHeart width={28} color="red" />
            ) : (
              <HiOutlineHeart width={28} />
            )}
          </WrapIcon>
        </Box>
      </WrapImg>

      <Stack textAlign={"start"} gap={"2px"} mt={1} width={"100%"}>
        <Typography fontSize={14} fontWeight={500}>
          {item?.name}
        </Typography>
        {item?.discountPrice && (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ xs: 12, md: 14 }}
              sx={{ textDecoration: "line-through" }}
            >
              {item?.discountPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
            <FlashItem>
              <IoIosFlash color="#ec3814" />
              <Typography color="#ec3814" fontSize={14} fontWeight={600}>
                20%
              </Typography>
            </FlashItem>
          </Box>
        )}

        <Typography fontSize={16} color="red" fontWeight={600}>
          {item?.price > 0
            ? item?.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            : ""}
        </Typography>
        <Box
          display={"flex"}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={1}
        >
          <Rating size="small" value={5} />
          {isTop ? (
            <Box display={"flex"} alignItems={"center"} gap={0.5}>
              <HiOutlineEye />
              <Typography fontSize={12} fontWeight={600}>
                {item?.views} Lượt xem
              </Typography>
            </Box>
          ) : (
            <Box display={"flex"} alignItems={"center"} gap={0.5}>
              <RiProductHuntLine />
              <Typography fontSize={12} fontWeight={600}>
                {item?.number} Sản phẩm
              </Typography>
            </Box>
          )}
        </Box>
      </Stack>
    </Wrapper>
  );
}

export default ProductCard;
