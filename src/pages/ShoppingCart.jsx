import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  styled,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #222",
  gap: 24,
  borderRadius: "20px",
  padding: "8px 14px",
  width: "min-content",
  "& svg": {
    "&:hover": {
      color: "red",
    },
  },
});

function ShoppingCart() {
  const [amount, setAmount] = useState(1);

  return (
    <MainLayout showWarning={false}>
      <Container>
        <Box py={4}>
          <Typography textAlign={"center"} fontSize={24} fontWeight={"bold"}>
            Shopping cart
          </Typography>
          <Box mt={4}>
            <Grid container>
              <Grid item xs={5}>
                <Typography fontSize={12} fontWeight={600}>
                  PRODUCT
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontSize={12} fontWeight={600}>
                  PRICE
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography fontSize={12} fontWeight={600}>
                  QUANTITY
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontSize={12} fontWeight={600}>
                  TOTAL
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container>
              <Grid item xs={5}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Box p={1} display={"flex"} alignItems={"center"} gap={1}>
                    <Box
                      component={"img"}
                      display={"block"}
                      width={120}
                      height={120}
                      sx={{ objectFit: "cover" }}
                      src={"/img/DP1.webp"}
                    />
                    <Box>
                      <Typography fontSize={14} fontWeight={600}>
                        DAILY FLASH SALE - OXVA Christmas Mega Offer
                      </Typography>
                      <Typography mt={"2px"} fontSize={14} fontWeight={600}>
                        Color: màu bạc
                      </Typography>
                      <IconButton aria-label="delete" color="error">
                        <FaRegTrashCan fontSize={18} />
                      </IconButton>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Typography color="red" fontWeight={"bold"} fontSize={12}>
                    $ 1,000,000 VNĐ
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <AmountWrap>
                    <FaMinus
                      fontSize={14}
                      onClick={() => setAmount(amount - 1)}
                    />
                    <Typography fontSize={14} fontWeight={"bold"}>
                      {amount}
                    </Typography>
                    <FaPlus
                      fontSize={14}
                      onClick={() => setAmount(amount + 1)}
                    />
                  </AmountWrap>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Typography fontWeight={"bold"} fontSize={12}>
                    $ 1,000,000 VNĐ
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Divider />
            <Grid container>
              <Grid item xs={5}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Box p={1} display={"flex"} alignItems={"center"} gap={1}>
                    <Box
                      component={"img"}
                      display={"block"}
                      width={120}
                      height={120}
                      sx={{ objectFit: "cover" }}
                      src={"/img/DP1.webp"}
                    />
                    <Box>
                      <Typography fontSize={14} fontWeight={600}>
                        DAILY FLASH SALE - OXVA Christmas Mega Offer
                      </Typography>
                      <Typography mt={"2px"} fontSize={14} fontWeight={600}>
                        Color: màu bạc
                      </Typography>
                      <IconButton aria-label="delete" color="error">
                        <FaRegTrashCan fontSize={18} />
                      </IconButton>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Typography color="red" fontWeight={"bold"} fontSize={12}>
                    $ 1,000,000 VNĐ
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <AmountWrap>
                    <FaMinus
                      fontSize={14}
                      onClick={() => setAmount(amount - 1)}
                    />
                    <Typography fontSize={14} fontWeight={"bold"}>
                      {amount}
                    </Typography>
                    <FaPlus
                      fontSize={14}
                      onClick={() => setAmount(amount + 1)}
                    />
                  </AmountWrap>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Typography fontWeight={"bold"} fontSize={12}>
                    $ 1,000,000 VNĐ
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Divider />
            <Box py={2} justifyContent={"flex-end"} display={"flex"}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <Typography textAlign={"end"} fontWeight={"bold"}>
                  SUBTOTAL:
                </Typography>
                <Typography textAlign={"end"} fontWeight={"bold"}>
                  $1,000,000 VNĐ
                </Typography>
              </Box>
            </Box>
            <Box mt={1} justifyContent={"flex-end"} display={"flex"}>
              <Button color="error" variant="contained">
                check out
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default ShoppingCart;
