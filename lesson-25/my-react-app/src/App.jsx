import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import EmojiBox from "./components/EmojiBox";
import Winner from "./components/Winner";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [results, setResults] = useState({});
  const [showWinner, setShowWinner] = useState(false);

  const handleShowResults = () => {
    setShowWinner(true);
  };

  const handleReset = () => {
    localStorage.removeItem("emojiVotes");
    setResults({});
    setShowWinner(false);
  };

  return (
    <Container className="app py-4">
      <Header />
      <EmojiBox results={results} setResults={setResults} />
      <div className="my-3">
        <Button variant="primary" onClick={handleShowResults} className="me-2">
          Show results
        </Button>
        <Button variant="danger" onClick={handleReset}>
          Cleat results
        </Button>
      </div>
      {showWinner && <Winner results={results} />}
    </Container>
  );
}

export default App;
