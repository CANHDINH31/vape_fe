import { Box, Typography, Checkbox, Divider } from "@mui/material";
import React from "react";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

function Filter() {
  return (
    <Box>
      <Box display={"flex"} gap={1} alignItems={"center"} fontWeight={"bold"}>
        <FilterListOutlinedIcon fontSize="16px" />
        <Typography fontSize={16} fontWeight={600}>
          BỘ LỌC TÌM KIẾM
        </Typography>
      </Box>
      <Box>
        <Typography mt={2} fontSize={14} fontWeight={600}>
          Theo danh mục
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            OXVA SQ POD kit
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            OXVA ONEO pro kit
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            OXVA SE2 pro kit
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            OXVA V2 CARTRIDGE
          </Typography>
        </Box>
        <Box mt={1}>
          <Divider />
        </Box>
      </Box>
      <Box>
        <Typography mt={2} fontSize={14} fontWeight={600}>
          Thương hiệu
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            SQ
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            ONEO
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            SE2
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            V2 CARTRIDGE
          </Typography>
        </Box>
        <Box mt={1}>
          <Divider />
        </Box>
      </Box>
      <Box>
        <Typography mt={2} fontSize={14} fontWeight={600}>
          Giá
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            Dưới 500K
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            500K - 1000K
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            100K - 5000K
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox size="small" />
          <Typography fontSize={12} fontWeight={500}>
            Trên 5000K
          </Typography>
        </Box>
        <Box mt={1}>
          <Divider />
        </Box>
      </Box>
    </Box>
  );
}

export default Filter;
