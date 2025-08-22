import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Container sx={{ py: 3 }}>
        <Outlet />
      </Container>
    </>
  );
}
