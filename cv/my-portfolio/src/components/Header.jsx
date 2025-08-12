import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../styles/header.scss";

export default function Header() {
  return (
    <AppBar position="static" color="primary" className="header">
      <Toolbar style={{ justifyContent: "center" }}>
        <Button color="inherit" component={Link} to="/">
          HOME
        </Button>
        <Button color="inherit" component={Link} to="/todo">
          TODO
        </Button>
        <Button color="inherit" component={Link} to="/swapi">
          SWAPI
        </Button>
      </Toolbar>
    </AppBar>
  );
}
