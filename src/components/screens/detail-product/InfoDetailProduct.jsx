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

function InfoDetailProduct() {
  const [amount, setAmount] = useState(1);
  const [active, setActive] = useState("");
  const listType = ["Màu vàng", "Màu xanh", "Màu bạc", "Màu đỏ"];

  useEffect(() => {
    setActive(listType[0]);
  }, []);

  return (
    <Box>
      <Typography fontSize={24} fontWeight={"bold"} color={"#222"}>
        OXVA XLIM SQ Pro Kit
      </Typography>
      <Box
        mt={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Box display={"flex"} gap={1} alignItems={"flex-end"}>
          <Typography color={"red"} fontSize={14} fontWeight={500}>
            $ 1,000,000 VNĐ
          </Typography>
          <Chip size="small" color="success" label="Còn hàng" />
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Rating size="small" value={5} />
          <Typography color={"red"} fontSize={12} fontWeight={500}>
            16 In STOCK
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography fontSize={12} fontWeight={500}>
          The OXVA XLIM SQ enters the PRO generation with its new exterior
          design, more power, and larger battery. A 0.96-inch color screen and a
          variety of options for pod (XLIM V2, Top Fill, and Pre-fill Cartridge)
          enhance your X-treme vaping experience with vibrant visuals.Continuing
          the highly leak-resistant design of the XLIM Series, the XLIM SQ PRO
          Kit ensures a worry-free vaping experience. You can vape with
          confidence, knowing that your device is designed to minimize leaks and
          spills.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography fontSize={14} fontWeight={"bold"}>
          COLOR:
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
        </Button>
        <WrapIcon>
          <CiHeart fontSize={24} />
        </WrapIcon>
      </Box>
    </Box>
  );
}

export default InfoDetailProduct;
