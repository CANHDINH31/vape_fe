import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";

const Menu = styled("div")({
  cursor: "pointer",
  color: "#fff",
  fontSize: 18,
  marginBottom: "2rem",
});

const Item = styled("div")({
  cursor: "pointer",
  color: "#999",
  fontSize: 14,
  lineHeight: 2,

  "&:hover": {
    color: "red",
  },
});

function Footer() {
  return (
    <Box bgcolor={"black"} paddingY={"4rem"}>
      <Container>
        <Grid container mb={8}>
          <Grid item xs={3}>
            <Menu>Sub-brand</Menu>
            <Item>OXBAR</Item>
            <Item>OX PASSION</Item>
          </Grid>
          <Grid item xs={3}>
            <Menu>Product</Menu>
            <Item>VERIFICATION</Item>
            <Item>MEDIA KITS</Item>
            <Item>FAQ</Item>
            <Item>XLIM SE</Item>
            <Item>XLIM POD</Item>
          </Grid>
          <Grid item xs={3}>
            <Menu>Support</Menu>
            <Item>OXBAR</Item>
            <Item>OX PASSION</Item>
          </Grid>
          <Grid item xs={3}>
            <Menu>Sub-brand</Menu>
            <Item>OXBAR</Item>
            <Item>OX PASSION</Item>
          </Grid>
        </Grid>
        <Typography color={"#999"} fontSize={10}>
          Service Time: Mon-Fri, 9:00 am - 6:30 pm, (GMT)
          <br />
          Address: #602, Block 1. Wan Ting BLDG. Baoyuan Rd#3012. Xixiang.
          Shenzhen. China
        </Typography>
        <Typography color={"#999"} fontSize={10} mt={2}>
          WARNING: OXVA e-cigarette devices are designed for use with e-liquids
          and are intended exclusively for adult smokers of legal purchase age.
          Minors, pregnant women, individuals with diabetes, patients with
          depression, or those with high blood pressure should NOT use this
          product. Please keep it out of reach of children and pets. Our product
          may contain nicotine, which is an addictive chemical. Your safety and
          well-being are our top priorities; we strongly encourage you to make
          informed choices and consult with a healthcare professional if you
          have any concerns.
        </Typography>
        <Typography color={"#999"} fontSize={10} mt={2}>
          COPYRIGHT © 2023 OXVA. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
