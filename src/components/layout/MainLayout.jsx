import { Box } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import Warning from "./warning/Warning";
import Footer from "./footer/Footer";

function MainLayout({ children, showWarning = true }) {
  return (
    <Box>
      {showWarning && <Warning />}
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default MainLayout;
