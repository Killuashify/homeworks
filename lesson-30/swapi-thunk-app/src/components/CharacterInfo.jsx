import React from "react";
import { useSelector } from "react-redux";

const CharacterInfo = () => {
  const { data, loading, error } = useSelector((state) => state.swapi);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return null;

  return <pre className="character-info">{JSON.stringify(data, null, 2)}</pre>;
};

export default CharacterInfo;
