import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Container, Box } from "@mui/material";
import MainFavourite from "../components/screens/my-favourite/MainFavourite";

function MyFavourite() {
  return (
    <MainLayout showWarning={false}>
      <Container>
        <Box py={4}>
          <MainFavourite />
        </Box>
      </Container>
    </MainLayout>
  );
}

export default MyFavourite;
