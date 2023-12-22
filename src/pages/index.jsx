import React from "react";
import Banner from "../components/screens/home/Banner";
import Difference from "../components/screens/home/Difference";
import Real from "../components/screens/home/Real";
import Magic from "../components/screens/home/Maigc";
import Drop from "../components/screens/home/Drop";
import Flavor from "../components/screens/home/Flavor";
import Product from "../components/screens/home/Product";
import MainLayout from "../components/layout/MainLayout";

function Home() {
  return (
    <MainLayout>
      <Banner />
      <Difference />
      <Real />
      <Magic />
      <Drop />
      <Flavor />
      <Product />
    </MainLayout>
  );
}

export default Home;
