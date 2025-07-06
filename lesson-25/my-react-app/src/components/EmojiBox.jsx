import React, { useState, useEffect } from "react";

const emojis = [
  { id: 1, icon: "😃" },
  { id: 2, icon: "😊" },
  { id: 3, icon: "😎" },
  { id: 4, icon: "🤩" },
  { id: 5, icon: "😍" },
];

const EmojiBox = ({ results, setResults }) => {
  const [votes, setVotes] = useState({});

  useEffect(() => {
    setVotes(results);
  }, [results]);

  const handleVote = (id) => {
    const newVotes = { ...votes, [id]: (votes[id] || 0) + 1 };
    setVotes(newVotes);
    setResults(newVotes);
    localStorage.setItem("emojiVotes", JSON.stringify(newVotes));
  };

  return (
    <div className="emoji-wrapper">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          style={{ cursor: "pointer", fontSize: "2rem" }}
          onClick={() => handleVote(emoji.id)}
        >
          {emoji.icon}
          <div>{votes[emoji.id] || 0}</div>
        </div>
      ))}
    </div>
  );
};

export default EmojiBox;
