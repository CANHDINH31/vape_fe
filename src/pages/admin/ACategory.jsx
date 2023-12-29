import React, { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import ModalUpdate from "../../components/common/ModalUpdate";
import {
  create,
  deleteCategory,
  listCategory,
  updateCategory,
} from "../../utils/api/category";
import { notify } from "../../utils/helpers/notify";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import ConfirmDelete from "../../components/common/ConfirmDelete";

function ACategory() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [name, setName] = useState("");
  const [displayOrder, setDisplayOrder] = useState(0);
  const [data, setData] = useState([]);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  const [idDelete, setIdDelete] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [product, setProduct] = useState([]);

  const columns = [
    { field: "index", headerName: "Số thứ tự", width: 200 },
    { field: "name", headerName: "Tên ", width: 250 },
    { field: "displayOrder", headerName: "Vị trí hiển thị", width: 250 },
    {
      field: "proudct",
      headerName: "Số lượng sản phẩm",
      width: 250,
      renderCell: (params) => params?.row?.product?.length,
    },
    {
      field: "",
      headerName: "Hành động",
      width: 250,
      renderCell: (params) => (
        <Box display={"flex"} gap={1}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleOpenConfirmUpdate(params.row)}
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

  const productColumns = [
    {
      field: "image",
      headerName: "Hình ảnh",
      width: 250,
      renderCell: (params) => (
        <Box
          component={"img"}
          src={params?.row?.url1 || "/img/noImage.jpg"}
          width={120}
          height={120}
          sx={{ objectFit: "cover", borderRadius: 1 }}
        />
      ),
    },
    { field: "name", headerName: "Tên ", width: 300 },

    {
      field: "",
      headerName: "Hành động",
      width: 300,
      renderCell: (params) => (
        <Box display={"flex"} gap={1}>
          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={() => {
              const newProducts = product?.filter((i) => i.id != params.row.id);
              setProduct(newProducts);
            }}
          >
            Xóa
          </Button>
        </Box>
      ),
    },
  ];

  const handleOpenConfirmUpdate = (data) => {
    setName(data?.name);
    setDisplayOrder(data?.displayOrder);
    setIdUpdate(data?.id);
    setProduct(data?.product?.map((e) => ({ ...e, id: e?._id })));
    setIsOpenUpdate(true);
  };

  const handleResetUpdate = () => {
    setIsOpenUpdate(false);
    setIdUpdate("");
    setProduct([]);
    setName("");
    setDisplayOrder(0);
  };

  const hanleCreateCategory = async () => {
    try {
      if (name) {
        await create({ name, displayOrder });
        notify("success", "Thêm danh mục thành công");
      }
      getListCategory();
    } catch (error) {}
    handleReset();
  };

  const hanleUpdateCategory = async () => {
    try {
      if (name) {
        await updateCategory(idUpdate, {
          name,
          displayOrder,
          product: product?.map((e) => e?._id),
        });
        notify("success", "Cập nhật danh mục thành công");
      }
      getListCategory();
    } catch (error) {}
    handleResetUpdate();
  };

  const handleReset = () => {
    setIsOpenAdd(false);
    setDisplayOrder(0);
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

        <Typography mt={2}>Vị trí hiển thị:</Typography>
        <TextField
          value={displayOrder}
          onChange={(e) => setDisplayOrder(e.target.value)}
          fullWidth
          size="small"
          type="number"
        />
      </ModalUpdate>

      {/* <Modal update */}
      <ModalUpdate
        open={isOpenUpdate}
        title={"Chi tiết danh mục"}
        handleClose={handleResetUpdate}
        maxWidth={"md"}
        handleOk={hanleUpdateCategory}
      >
        <Typography mt={1}>Tên danh mục:</Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size="small"
        />

        <Typography mt={1}>Vị trí hiển thị:</Typography>
        <TextField
          value={displayOrder}
          onChange={(e) => setDisplayOrder(e.target.value)}
          fullWidth
          size="small"
        />
        <Typography mt={4}>Danh sách sản phẩm:</Typography>

        <Box height={400}>
          <DataGrid rows={product} columns={productColumns} rowHeight={150} />
        </Box>
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

export default ACategory;
