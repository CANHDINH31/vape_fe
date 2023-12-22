import { Box, Typography } from "@mui/material";
import React from "react";

function Warning() {
  return (
    <Box paddingY={2}>
      <Typography
        textAlign={"center"}
        fontSize={"1.2rem"}
        lineHeight={1}
        fontWeight={700}
      >
        WARNING: This product contains
        <br />
        nicotine. Nicotine is an addictive chemical.
      </Typography>
    </Box>
  );
}

export default Warning;
