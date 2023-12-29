import React, { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import ModalUpdate from "../../components/common/ModalUpdate";
import { create, deleteUser, listUser, updateUser } from "../../utils/api/user";
import { notify } from "../../utils/helpers/notify";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import ConfirmDelete from "../../components/common/ConfirmDelete";

function AUser() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  const [idDelete, setIdDelete] = useState("");
  const [idUpdate, setIdUpdate] = useState("");

  const columns = [
    { field: "index", headerName: "Số thứ tự", width: 200 },
    { field: "name", headerName: "Họ tên", width: 250 },
    { field: "username", headerName: "Username", width: 250 },
    { field: "password", headerName: "Password", width: 250 },
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

  const handleOpenConfirmUpdate = (data) => {
    setName(data?.name);
    setUsername(data?.username);
    setPassword(data?.password);
    setIdUpdate(data?.id);
    setIsOpenUpdate(true);
  };

  const handleResetUpdate = () => {
    setIsOpenUpdate(false);
    setIdUpdate("");
    setUsername("");
    setPassword("");
    setName("");
  };

  const hanleCreateUser = async () => {
    try {
      if (name) {
        await create({ name, username, password });
        notify("success", "Thêm người dùng thành công");
      }
      getListUser();
    } catch (error) {
      notify("error", error?.response?.data?.message);
    }
    handleReset();
  };

  const hanleUpdateUser = async () => {
    try {
      if (name) {
        await updateUser(idUpdate, {
          name,
          username,
          password,
        });
        notify("success", "Cập nhật người dùng thành công");
      }
      getListUser();
    } catch (error) {}
    handleResetUpdate();
  };

  const handleReset = () => {
    setIsOpenAdd(false);
    setName("");
    setPassword("");
    setUsername("");
  };

  const handleOpenConfirmDelete = (id) => {
    setIsOpenDelete(true);
    setIdDelete(id);
  };

  const getListUser = async () => {
    try {
      const res = await listUser();
      setData(
        res.data
          ?.filter((i) => i.username != "admin")
          ?.map((e, index) => ({ id: e._id, ...e, index: index + 1 }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(idDelete);
      getListUser();
      notify("success", "Xoá người dùng thành công");
    } catch (error) {}
    setIsOpenDelete(false);
  };

  useEffect(() => {
    getListUser();
  }, []);

  return (
    <AdminLayout>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={"bold"} fontSize={20}>
          Quản lý người dùng
        </Typography>
        <Button variant="contained" onClick={() => setIsOpenAdd(true)}>
          Thêm người dùng
        </Button>
      </Box>
      <Box mt={4}>
        <DataGrid rows={data} columns={columns} />
      </Box>

      {/* <Modal create */}
      <ModalUpdate
        open={isOpenAdd}
        title={"Thêm người dùng"}
        handleClose={handleReset}
        handleOk={hanleCreateUser}
      >
        <Typography>Họ tên:</Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size="small"
        />

        <Typography mt={2}>Username:</Typography>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          size="small"
        />

        <Typography mt={2}>Password:</Typography>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          size="small"
        />
      </ModalUpdate>

      {/* <Modal update */}
      <ModalUpdate
        open={isOpenUpdate}
        title={"Chi tiết danh mục"}
        handleClose={handleResetUpdate}
        maxWidth={"md"}
        handleOk={hanleUpdateUser}
      >
        <Typography mt={1}>Họ tên:</Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size="small"
        />

        <Typography mt={2}>Username:</Typography>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled
          fullWidth
          size="small"
        />

        <Typography mt={2}>Password:</Typography>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          size="small"
        />
      </ModalUpdate>

      {/* Modal delete */}
      <ConfirmDelete
        open={isOpenDelete}
        handleClose={() => setIsOpenDelete(false)}
        handleOk={handleDeleteUser}
      />
    </AdminLayout>
  );
}

export default AUser;
