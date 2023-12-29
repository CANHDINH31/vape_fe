import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import ModalUpdate from "../../components/common/ModalUpdate";
import ConfirmDelete from "../../components/common/ConfirmDelete";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebase";
import { notify } from "../../utils/helpers/notify";
import {
  create,
  deleteProduct,
  listProduct,
  updateProduct,
} from "../../utils/api/product";
import { DataGrid } from "@mui/x-data-grid";
import { addProduct, listCategory } from "../../utils/api/category";

function AProduct() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenAddToCategory, setIsOpenAddToCategory] = useState(false);

  const [idDelete, setIdDelete] = useState("");
  const [idUpdate, setIdUpdate] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(0);
  const [nameType, setNameType] = useState("");
  const [types, setTypes] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [data, setData] = useState([]);

  const [listId, setListId] = useState([]);
  const [idCategory, setIdCategory] = useState("");
  const [arrCategory, setArrCategory] = useState([]);

  const columns = [
    {
      field: "image",
      headerName: "Hình ảnh",
      width: 150,
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
    { field: "name", headerName: "Tên ", width: 120 },
    { field: "description", headerName: "Mô tả", width: 250 },
    { field: "price", headerName: "Giá", width: 100 },
    { field: "number", headerName: "Số lượng", width: 100 },
    {
      field: "types",
      headerName: "Phân loại",
      width: 250,
      renderCell: (params) => params.row.types?.join(", "),
    },
    {
      field: "",
      headerName: "Hành động",
      width: 200,
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

  function handleUpload1(event) {
    const file = event.target.files[0];

    const storageRef = ref(storage, `/files/${file.name + Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl1(url);
        });
      }
    );
    event.target.value = null;
  }

  function handleUpload2(event) {
    const file = event.target.files[0];

    const storageRef = ref(storage, `/files/${file.name + Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl2(url);
        });
      }
    );
    event.target.value = null;
  }

  function handleUpload3(event) {
    const file = event.target.files[0];

    const storageRef = ref(storage, `/files/${file.name + Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl3(url);
        });
      }
    );
    event.target.value = null;
  }

  function handleUpload4(event) {
    const file = event.target.files[0];

    const storageRef = ref(storage, `/files/${file.name + Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl4(url);
        });
      }
    );
    event.target.value = null;
  }

  const handleReset = () => {
    setIsOpenAdd(false);
    setName("");
    setPrice(0);
    setDescription("");
    setNameType("");
    setNumber(0);
    setTypes("");
    setUrl1("");
    setUrl2("");
    setUrl3("");
    setUrl4("");
  };

  const handleResetUpdate = () => {
    setIsOpenUpdate(false);
    setIdUpdate("");
    setName("");
    setPrice(0);
    setDescription("");
    setNameType("");
    setNumber(0);
    setTypes("");
    setUrl1("");
    setUrl2("");
    setUrl3("");
    setUrl4("");
  };

  const handleAddProduct = async () => {
    try {
      await create({
        name,
        price: Number(price),
        number: Number(number),
        description,
        nameType,
        types: types?.split(","),
        url1,
        url2,
        url3,
        url4,
      });
      notify("success", "Thêm sản phẩm thành công");
      getListProduct();
    } catch (error) {}
    handleReset();
  };

  const handleAddProductToCategory = async () => {
    try {
      if (idCategory) {
        await addProduct(idCategory, listId);
        notify("success", "Thêm sản phẩm vào danh mục thành công thành công");
        getListProduct();
      }
    } catch (error) {}
    handleResetAddToCategory();
  };

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(idUpdate, {
        name,
        price: Number(price),
        number: Number(number),
        description,
        nameType,
        types: types?.split(","),
        url1,
        url2,
        url3,
        url4,
      });
      notify("success", "Cập nhật sản phẩm thành công");
      getListProduct();
    } catch (error) {
      console.log(error);
    }
    handleResetUpdate();
  };

  const getListProduct = async () => {
    try {
      const res = await listProduct();
      setData(res.data?.map((e) => ({ id: e._id, ...e })));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenConfirmDelete = (id) => {
    setIsOpenDelete(true);
    setIdDelete(id);
  };

  const handleOpenConfirmUpdate = (data) => {
    setName(data?.name);
    setIdUpdate(data?.id);
    setName(data?.name);
    setNameType(data?.nameType);
    setNumber(data?.number || 0);
    setPrice(data?.price || 0);
    setTypes(data?.types?.join(","));
    setDescription(data?.description);

    setUrl1(data?.url1);
    setUrl2(data?.url2);
    setUrl3(data?.url3);
    setUrl4(data?.url4);

    setIsOpenUpdate(true);
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(idDelete);
      getListProduct();
      notify("success", "Xoá sản phẩm thành công");
    } catch (error) {}
    setIsOpenDelete(false);
  };

  const handleResetAddToCategory = () => {
    setListId([]);
    setIdCategory(arrCategory?.[0]?._id);
    setIsOpenAddToCategory(false);
  };

  useEffect(() => {
    const getListCategory = async () => {
      try {
        const res = await listCategory();
        setArrCategory(res?.data);
        setIdCategory(res?.data?.[0]?._id);
      } catch (error) {
        console.log(error);
      }
    };
    getListCategory();
    getListProduct();
  }, []);

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
        <Box display={"flex"} alignItems={"center"} gap={1}>
          {listId?.length > 0 && (
            <Button
              variant="contained"
              onClick={() => setIsOpenAddToCategory(true)}
              size="small"
              color="success"
            >
              Thêm sản phẩm vào danh mục
            </Button>
          )}

          <Button
            variant="contained"
            onClick={() => setIsOpenAdd(true)}
            size="small"
          >
            Thêm sản phẩm
          </Button>
        </Box>
      </Box>
      <Box mt={4}>
        <DataGrid
          checkboxSelection
          rows={data}
          columns={columns}
          rowHeight={150}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setListId(newRowSelectionModel);
          }}
          rowSelectionModel={listId}
        />
      </Box>
      {/* Modal create */}
      <ModalUpdate
        open={isOpenAdd}
        title={"Thêm sản phẩm"}
        maxWidth={"lg"}
        handleClose={handleReset}
        handleOk={handleAddProduct}
      >
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography>Tên sản phẩm:</Typography>
            <TextField
              fullWidth
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Giá:</Typography>
            <TextField
              fullWidth
              size="small"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Mô tả:</Typography>
            <TextField
              fullWidth
              size="small"
              multiline
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>Số lượng:</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Tên phân loại:</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={nameType}
                  onChange={(e) => setNameType(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Thêm loại: (ngăn cách nhau bởi dấu ,)</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={types}
                  onChange={(e) => setTypes(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {url1 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 1:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url1}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl1("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 1:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 1"
                  size="small"
                  fullWidth
                  onChange={handleUpload1}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {url2 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 2:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url2}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl2("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 2:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 2"
                  size="small"
                  fullWidth
                  onChange={handleUpload2}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {url3 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 3:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url3}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl3("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 3:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 3"
                  size="small"
                  fullWidth
                  onChange={handleUpload3}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {url4 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 4:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url4}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl4("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 4:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 4"
                  size="small"
                  fullWidth
                  onChange={handleUpload4}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
        </Grid>
      </ModalUpdate>

      {/* Modal update */}
      <ModalUpdate
        open={isOpenUpdate}
        title={"Cập nhật sản phẩm"}
        maxWidth={"lg"}
        handleClose={handleResetUpdate}
        handleOk={handleUpdateProduct}
      >
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography>Tên sản phẩm:</Typography>
            <TextField
              fullWidth
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Giá:</Typography>
            <TextField
              fullWidth
              size="small"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Mô tả:</Typography>
            <TextField
              fullWidth
              size="small"
              multiline
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>Số lượng:</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Tên phân loại:</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={nameType}
                  onChange={(e) => setNameType(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Thêm loại: (ngăn cách nhau bởi dấu ,)</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={types}
                  onChange={(e) => setTypes(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {url1 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 1:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url1}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl1("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 1:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 1"
                  size="small"
                  fullWidth
                  onChange={handleUpload1}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {url2 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 2:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url2}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl2("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 2:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 2"
                  size="small"
                  fullWidth
                  onChange={handleUpload2}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {url3 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 3:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url3}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl3("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 3:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 3"
                  size="small"
                  fullWidth
                  onChange={handleUpload3}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {url4 ? (
              <>
                <Typography variant="subtitle2" mb={1}>
                  Ảnh 4:
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Box
                    component={"img"}
                    src={url4}
                    width={200}
                    height={200}
                    sx={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setUrl4("")}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography>Ảnh 4:</Typography>
                <TextField
                  type="file"
                  placeholder="Upload ảnh 4"
                  size="small"
                  fullWidth
                  onChange={handleUpload4}
                  accept="image/png, image/gif, image/jpeg"
                  multiline={false}
                />
              </>
            )}
          </Grid>
        </Grid>
      </ModalUpdate>

      {/* Modal add to category*/}
      <ModalUpdate
        open={isOpenAddToCategory}
        title={"Thêm sản phẩm vào danh mục"}
        handleClose={handleResetAddToCategory}
        handleOk={handleAddProductToCategory}
      >
        <Typography mb={1} fontWeight={600}>
          Chon danh mục:
        </Typography>
        <Select
          fullWidth
          value={idCategory}
          size="small"
          onChange={(e) => setIdCategory(e.target.value)}
        >
          {arrCategory?.map((e) => (
            <MenuItem value={e?._id}>{e?.name}</MenuItem>
          ))}
        </Select>
      </ModalUpdate>

      {/* Modal delete */}
      <ConfirmDelete
        open={isOpenDelete}
        handleClose={() => setIsOpenDelete(false)}
        handleOk={handleDeleteProduct}
      />
    </AdminLayout>
  );
}

export default AProduct;
