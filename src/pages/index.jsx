import { Box } from "@mui/material";
import React from "react";
import Warning from "../components/screens/home/Warning";
import Menu from "../components/screens/home/Menu";
import Banner from "../components/screens/home/Banner";
import Difference from "../components/screens/home/Difference";

function Home() {
  return (
    <Box>
      <Warning />
      <Menu />
      <Banner />
      <Difference />
    </Box>
  );
}

export default Home;
