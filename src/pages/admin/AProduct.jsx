import React, { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import ModalUpdate from "../../components/common/ModalUpdate";

function AProduct() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

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
        <Button variant="contained" onClick={() => setIsOpenAdd(true)}>
          Thêm sản phẩm
        </Button>
      </Box>
      <ModalUpdate open={isOpenAdd} title={"Thêm sản phẩm"} maxWidth={"lg"}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography>Tên sản phẩm:</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item xs={6}>
            <Typography>Giá:</Typography>
            <TextField fullWidth size="small" type="number" />
          </Grid>
          <Grid item xs={6}>
            <Typography>Mô tả:</Typography>
            <TextField fullWidth size="small" multiline rows={5} />
          </Grid>
          <Grid item xs={6}>
            <Typography>Phân loại:</Typography>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
      </ModalUpdate>
    </AdminLayout>
  );
}

export default AProduct;
