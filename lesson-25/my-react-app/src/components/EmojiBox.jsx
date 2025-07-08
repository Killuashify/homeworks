import React, { Component } from "react";

const emojis = [
  { id: 1, icon: "😃" },
  { id: 2, icon: "😊" },
  { id: 3, icon: "😎" },
  { id: 4, icon: "🤩" },
  { id: 5, icon: "😍" },
];

class EmojiBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: props.results || {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.results !== this.props.results) {
      this.setState({ votes: this.props.results });
    }
  }

  handleVote = (id) => {
    const newVotes = {
      ...this.state.votes,
      [id]: (this.state.votes[id] || 0) + 1,
    };
    this.setState({ votes: newVotes });
    this.props.setResults(newVotes);
    localStorage.setItem("emojiVotes", JSON.stringify(newVotes));
  };

  render() {
    return (
      <div className="emoji-wrapper">
        {emojis.map((emoji) => (
          <div
            key={emoji.id}
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => this.handleVote(emoji.id)}
          >
            {emoji.icon}
            <div>{this.state.votes[emoji.id] || 0}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default EmojiBox;
