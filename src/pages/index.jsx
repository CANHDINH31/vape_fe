import { Box } from "@mui/material";
import React from "react";
import Warning from "../components/screens/home/Warning";
import Menu from "../components/screens/home/Menu";
import Banner from "../components/screens/home/Banner";
import Difference from "../components/screens/home/Difference";
import Real from "../components/screens/home/Real";
import Magic from "../components/screens/home/Maigc";
import Drop from "../components/screens/home/Drop";
import Flavor from "../components/screens/home/Flavor";
import Product from "../components/screens/home/Product";

function Home() {
  return (
    <Box>
      <Warning />
      <Menu />
      <Banner />
      <Difference />
      <Real />
      <Magic />
      <Drop />
      <Flavor />
      <Product />
    </Box>
  );
}

export default Home;
