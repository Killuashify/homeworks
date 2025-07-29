import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacter } from "../redux/swapiSlice";

const SearchForm = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim()) {
      dispatch(fetchCharacter(id));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="number"
        placeholder="Enter character ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Get info</button>
    </form>
  );
};

export default SearchForm;
