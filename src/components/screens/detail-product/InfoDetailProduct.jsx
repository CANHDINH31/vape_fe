import { Box, Typography, Chip, Rating, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";

const AmountWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #222",
  gap: 28,
  borderRadius: "20px",
  padding: "10px 16px",
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

function InfoDetailProduct({ data }) {
  const [amount, setAmount] = useState(1);
  const [active, setActive] = useState("");
  const [listType, setListType] = useState([]);

  useEffect(() => {
    setActive(listType?.[0]);
  }, [listType]);

  useEffect(() => {
    setListType(data?.types);
  }, [data]);

  return (
    <Box>
      <Typography fontSize={24} fontWeight={"bold"} color={"#222"}>
        {data?.name}
      </Typography>
      <Box
        mt={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Box display={"flex"} gap={1} alignItems={"flex-end"}>
          <Typography color={"red"} fontSize={14} fontWeight={500}>
            ${" "}
            {data?.price > 0
              ? data?.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              : "Liên hệ để thông tin giá"}
          </Typography>
          <Chip
            size="small"
            color={data?.number > 0 ? "success" : "error"}
            label={data?.number > 0 ? "Còn hàng" : "Hết hàng"}
          />
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Rating size="small" value={5} />
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
        {/* <AmountWrap>
          <FaMinus fontSize={14} onClick={() => setAmount(amount - 1)} />
          <Typography fontSize={14} fontWeight={"bold"}>
            {amount}
          </Typography>
          <FaPlus fontSize={14} onClick={() => setAmount(amount + 1)} />
        </AmountWrap>
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: "20px",
            background: "#222",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
          startIcon={<MdOutlineAttachMoney />}
        >
          BUY IT NOW
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ borderRadius: "20px" }}
          startIcon={<MdOutlineShoppingCart />}
        >
          ART TO CART
        </Button> */}
        <WrapIcon>
          <CiHeart fontSize={24} />
        </WrapIcon>
      </Box>
    </Box>
  );
}

export default InfoDetailProduct;
