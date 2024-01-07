import { Box, Typography, Chip, Rating, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../../utils/helpers/notify";
import { favourite } from "../../../utils/redux/userSlice";
import { FaHeart } from "react-icons/fa";
import { updateUser } from "../../../utils/api/user";
import { IoIosFlash } from "react-icons/io";

const AmountWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #222",
  gap: 24,
  borderRadius: "20px",
  padding: "10px 14px",
  width: "min-content",
  "& svg": {
    "&:hover": {
      color: "red",
    },
  },
});

const WrapIcon = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #000",
  width: 40,
  height: 40,
  borderRadius: "50%",
  "&:hover": {
    borderColor: "red",
    "& svg": {
      color: "red",
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

function InfoDetailProduct({ data }) {
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);
  const [active, setActive] = useState("");
  const [listType, setListType] = useState([]);

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

  useEffect(() => {
    setActive(listType?.[0]);
  }, [listType]);

  useEffect(() => {
    setListType(data?.types);
  }, [data]);

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={1}
      >
        <Typography fontSize={24} fontWeight={"bold"} color={"#222"}>
          {data?.name}
        </Typography>

        <Typography
          fontSize={14}
          component={"span"}
        >{`(${data?.views}) Lượt xem`}</Typography>
      </Box>
      <Box
        mt={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "flex-end" }}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={1}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          {data?.discountPrice && (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
              alignItems={"center"}
              gap={1}
            >
              <Typography
                fontSize={{ xs: 12, md: 14 }}
                sx={{ textDecoration: "line-through" }}
              >
                {data?.discountPrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </Typography>
              <FlashItem>
                <IoIosFlash color="#ec3814" />
                <Typography color="#ec3814" fontSize={14} fontWeight={600}>
                  {Number(
                    ((Number(data?.price) - Number(data?.discountPrice)) /
                      Number(data?.price)) *
                      100
                  ).toFixed(0)}
                </Typography>
              </FlashItem>
            </Box>
          )}
          <Typography
            color={"red"}
            fontSize={14}
            fontWeight={500}
            whiteSpace={"nowrap"}
          >
            ${" "}
            {data?.price > 0
              ? data?.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              : "Liên hệ để thông tin giá"}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Chip
            size="small"
            color={data?.number > 0 ? "success" : "error"}
            label={data?.number > 0 ? "Còn hàng" : "Hết hàng"}
          />
          <Typography color={"red"} fontSize={12} fontWeight={500}>
            {data?.number} Sản phẩm
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Box
          component={"div"}
          fontSize={12}
          fontWeight={500}
          whiteSpace={"pre-line"}
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </Box>
      {data?.nameType && (
        <Box mt={2}>
          <Typography fontSize={14} fontWeight={"bold"} whiteSpace={"pre-line"}>
            {data?.nameType.toUpperCase()}:
          </Typography>
          <Box display={"flex"} sx={{ cursor: "pointer" }} mt={1} gap={1}>
            {listType?.map((type, index) => (
              <Chip
                key={index}
                size="medium"
                label={type}
                color={type === active ? "error" : "default"}
                clickable={true}
                onClick={() => setActive(type)}
              />
            ))}
          </Box>
        </Box>
      )}
      {data?.struct && (
        <Box mt={2}>
          <Typography fontSize={14} fontWeight={"bold"} whiteSpace={"pre-line"}>
            THÔNG SỐ KỸ THUẬT:
          </Typography>
          <Box mt={2}>
            <Box
              component={"div"}
              fontSize={12}
              fontWeight={500}
              whiteSpace={"pre-line"}
              dangerouslySetInnerHTML={{ __html: data?.struct }}
            />
          </Box>
        </Box>
      )}

      <Box mt={2} display={"flex"} gap={2}>
        <AmountWrap>
          <FaMinus fontSize={14} onClick={() => setAmount(amount - 1)} />
          <Typography fontSize={14} fontWeight={"bold"}>
            {amount}
          </Typography>
          <FaPlus fontSize={14} onClick={() => setAmount(amount + 1)} />
        </AmountWrap>
        <Button
          variant="contained"
          color="error"
          sx={{ borderRadius: "20px" }}
          startIcon={<MdOutlineShoppingCart />}
        >
          ART TO CART
        </Button>
        <Box onClick={(e) => handleFavourite(e, data)}>
          {user?.favourite?.map((e) => e?._id)?.includes(data?._id) ? (
            <WrapIcon sx={{ borderColor: "red" }}>
              <FaHeart width={24} color="red" />
            </WrapIcon>
          ) : (
            <WrapIcon>
              <CiHeart width={24} />
            </WrapIcon>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InfoDetailProduct;
