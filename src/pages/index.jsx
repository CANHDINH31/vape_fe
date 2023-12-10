import { Box } from "@mui/material";
import React from "react";
import Warning from "../components/screens/home/Warning";
import Menu from "../components/screens/home/Menu";

function Home() {
  return (
    <Box>
      <Warning />
      <Menu />
    </Box>
  );
}

export default Home;
