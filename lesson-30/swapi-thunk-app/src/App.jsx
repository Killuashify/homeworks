import React from "react";
import SearchForm from "./components/SearchForm";
import CharacterInfo from "./components/CharacterInfo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <h1>SWAPI</h1>
      <SearchForm />
      <CharacterInfo />
      <Footer />
    </div>
  );
};

export default App;
