import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <AppBar position="sticky" elevation={1} className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" className={styles.title}>
          Booking
        </Typography>
        <div className={styles.navButtons}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            size="small"
            className={styles.button}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            variant="contained"
            size="small"
            className={styles.button}
          >
            About
          </Button>
          <Button
            component={RouterLink}
            to="/hotels"
            variant="contained"
            size="small"
            className={styles.button}
          >
            Hotels
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
