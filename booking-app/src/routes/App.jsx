import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  );
};

export default App;
