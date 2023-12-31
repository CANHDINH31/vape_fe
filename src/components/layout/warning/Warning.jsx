import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../../../utils/theme";

const Text = styled(Typography)({
  textAlign: "center",
  fontSize: "0.8rem",
  lineHeight: 1,
  fontWeight: 700,
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
});

function Warning() {
  return (
    <Box padding={2}>
      <Text>
        WARNING: This product contains nicotine.
        <br />
        Nicotine is an addictive chemical.
      </Text>
    </Box>
  );
}

export default Warning;
