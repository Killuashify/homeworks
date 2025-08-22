import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header /> {}
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
