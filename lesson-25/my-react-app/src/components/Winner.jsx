import React, { Component } from "react";

const emojis = {
  1: "😃",
  2: "😊",
  3: "😎",
  4: "🤩",
  5: "😍",
};

class Winner extends Component {
  render() {
    const { results } = this.props;

    if (!results || Object.keys(results).length === 0) return null;

    const maxVotes = Math.max(...Object.values(results));
    const winnerId = Object.keys(results).find(
      (key) => results[key] === maxVotes
    );

    return (
      <div className="winner">
        <h3>Winner:</h3>
        <div style={{ fontSize: "3rem" }}>{emojis[winnerId]}</div>
        <div>Number of votes: {maxVotes}</div>
      </div>
    );
  }
}

export default Winner;
