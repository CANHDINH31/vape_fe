import React, { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import ModalUpdate from "../../components/common/ModalUpdate";
import { create, deleteCategory, listCategory } from "../../utils/api/category";
import { notify } from "../../utils/helpers/notify";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import ConfirmDelete from "../../components/common/ConfirmDelete";

function Category() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  const [idDelete, setIdDelete] = useState("");
  const [idUpdate, setIdUpdate] = useState("");

  const columns = [
    { field: "index", headerName: "Số thứ tự", width: 200 },
    { field: "name", headerName: "Tên ", width: 300 },
    {
      field: "",
      headerName: "Hành động",
      width: 300,
      renderCell: (params) => (
        <Box display={"flex"} gap={1}>
          <Button
            variant="contained"
            size="small"
            // onClick={() => handleOpenConfirmUpdate(params.row)}
          >
            Chi tiết
          </Button>
          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={() => handleOpenConfirmDelete(params.row.id)}
          >
            Xóa
          </Button>
        </Box>
      ),
    },
  ];

  const hanleCreateCategory = async () => {
    try {
      if (name) {
        await create({ name });
        notify("success", "Thêm danh mục thành công");
      }
      getListCategory();
    } catch (error) {}
    handleReset();
  };

  const handleReset = () => {
    setIsOpenAdd(false);
    setName("");
  };

  const handleOpenConfirmDelete = (id) => {
    setIsOpenDelete(true);
    setIdDelete(id);
  };

  const getListCategory = async () => {
    try {
      const res = await listCategory();
      setData(
        res.data?.map((e, index) => ({ id: e._id, ...e, index: index + 1 }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      await deleteCategory(idDelete);
      getListCategory();
      notify("success", "Xoá danh mục thành công");
    } catch (error) {}
    setIsOpenDelete(false);
  };

  useEffect(() => {
    getListCategory();
  }, []);

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
      <Box mt={4}>
        <DataGrid rows={data} columns={columns} />
      </Box>
      {/* <Modal create */}
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

      {/* Modal delete */}
      <ConfirmDelete
        open={isOpenDelete}
        handleClose={() => setIsOpenDelete(false)}
        handleOk={handleDeleteCategory}
      />
    </AdminLayout>
  );
}

export default Category;
