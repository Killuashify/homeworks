import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import EmojiBox from "./components/EmojiBox";
import Winner from "./components/Winner";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: JSON.parse(localStorage.getItem("emojiVotes")) || {},
      showWinner: false,
    };
  }

  setResults = (newResults) => {
    this.setState({ results: newResults });
  };

  handleShowResults = () => {
    this.setState({ showWinner: true });
  };

  handleReset = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({ results: {}, showWinner: false });
  };

  render() {
    const { results, showWinner } = this.state;

    return (
      <Container className="app py-4">
        <Header />
        <EmojiBox results={results} setResults={this.setResults} />
        <div className="my-3">
          <Button
            variant="primary"
            onClick={this.handleShowResults}
            className="me-2"
          >
            Show results
          </Button>
          <Button variant="danger" onClick={this.handleReset}>
            Clear results
          </Button>
        </div>
        {showWinner && <Winner results={results} />}
      </Container>
    );
  }
}

export default App;
