import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Paper, Typography, Button } from "@mui/material";
import "../styles/swapi.scss";

export default function Swapi() {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState("https://swapi.py4e.com/api/people/");
  const [loading, setLoading] = useState(false);

  const fetchPeople = (url) => {
    if (!url) return;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPeople((prev) => {
          const existingNames = new Set(prev.map((p) => p.name));
          const uniqueNew = res.data.results.filter(
            (p) => !existingNames.has(p.name)
          );
          return [...prev, ...uniqueNew];
        });
        setNext(res.data.next);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPeople(next);
  }, []);

  return (
    <Container className="swapi">
      {people.map((p, i) => (
        <Paper key={i} style={{ margin: "10px 0", padding: 12 }}>
          <Typography variant="h6">{p.name}</Typography>
          <Typography>
            Height: {p.height} — Mass: {p.mass}
          </Typography>
          <Typography>Birth year: {p.birth_year}</Typography>
        </Paper>
      ))}

      {next && (
        <Button
          variant="contained"
          onClick={() => fetchPeople(next)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load more"}
        </Button>
      )}
    </Container>
  );
}
