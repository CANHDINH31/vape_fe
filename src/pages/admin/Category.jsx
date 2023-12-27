import React, { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import ModalUpdate from "../../components/common/ModalUpdate";
import { create } from "../../utils/api/category";
import { notify } from "../../utils/helpers/notify";

function Category() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [name, setName] = useState("");

  const hanleCreateCategory = async () => {
    try {
      if (name) {
        await create({ name });
        notify("success", "Thêm danh mục thành công");
      }
    } catch (error) {}
    handleReset();
  };

  const handleReset = () => {
    setIsOpenAdd(false);
    setName("");
  };

  return (
    <AdminLayout>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={"bold"} fontSize={20}>
          Quản lý danh mục
        </Typography>
        <Button variant="contained" onClick={() => setIsOpenAdd(true)}>
          Thêm danh mục
        </Button>
      </Box>
      <ModalUpdate
        open={isOpenAdd}
        title={"Thêm danh mục"}
        handleClose={handleReset}
        handleOk={hanleCreateCategory}
      >
        <Typography>Tên danh mục:</Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size="small"
        />
      </ModalUpdate>
    </AdminLayout>
  );
}

export default Category;
