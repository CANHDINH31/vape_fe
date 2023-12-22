import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Warning from "./warning/Warning";
import Footer from "./footer/Footer";
import { useNavigate } from "react-router-dom";
import ListContact from "./contact/ListContact";
import ScrollToTop from "./ScrollToTop";

function MainLayout({ children, showWarning = true }) {
  const naviagte = useNavigate();

  useEffect(() => {
    const isVerifyAge = sessionStorage.getItem("verifyAge");
    if (!isVerifyAge) {
      naviagte("/verify-age");
    }
  }, []);

  return (
    <Box>
      {showWarning && <Warning />}
      <Header />
      {children}
      <Footer />
      <ListContact />
      <ScrollToTop />
    </Box>
  );
}

export default MainLayout;
