import React from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import { Box, Typography, Button } from "@mui/material";

function AProduct() {
  return (
    <AdminLayout>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={"bold"} fontSize={20}>
          Quản lý sản phẩm
        </Typography>
        <Button variant="contained">Thêm sản phẩm</Button>
      </Box>
    </AdminLayout>
  );
}

export default AProduct;
