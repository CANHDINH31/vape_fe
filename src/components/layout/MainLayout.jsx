import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Warning from "./warning/Warning";
import Footer from "./footer/Footer";
import { useNavigate } from "react-router-dom";
import ListContact from "./contact/ListContact";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";

function MainLayout({ children, showWarning = true }) {
  const naviagte = useNavigate();
  const { user } = useSelector((state) => state?.user);

  useEffect(() => {
    const isVerifyAge = sessionStorage.getItem("verifyAge");
    if (!isVerifyAge && !user?.name) {
      naviagte("/verify-age");
    }
  }, []);

  return (
    <Box width={"100%"}>
      {showWarning && <Warning />}
      <Header />
      <Box minHeight={"70vh"}>{children}</Box>
      <Footer />
      <ListContact />
      <ScrollToTop />
    </Box>
  );
}

export default MainLayout;
