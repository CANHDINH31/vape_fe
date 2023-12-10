import { Box, Typography } from "@mui/material";
import React from "react";

function Warning() {
  return (
    <Box paddingY={3}>
      <Typography
        textAlign={"center"}
        fontSize={"1.5rem"}
        lineHeight={1}
        fontWeight={600}
      >
        WARNING: This product contains
        <br />
        nicotine. Nicotine is an addictive chemical.
      </Typography>
    </Box>
  );
}

export default Warning;
