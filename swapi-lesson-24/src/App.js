import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EntityList from "./components/EntityList";

function App() {
  return (
    <div className="container my-4">
      <Header />
      <SearchBar />
      <EntityList />
    </div>
  );
}

export default App;
