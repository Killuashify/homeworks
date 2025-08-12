import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/todo.scss";

const STORAGE_KEY = "my_portfolio_todos_v1";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setTodos(JSON.parse(raw));
      } catch {
        setTodos([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const v = value.trim();
    if (!v) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: v }]);
    setValue("");
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditValue(text);
  };

  const saveEdit = () => {
    const v = editValue.trim();
    if (!v) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === editId ? { ...t, text: v } : t))
    );
    setEditId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditValue("");
  };

  return (
    <Container className="todo">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="New task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setTodos([])}
        >
          Clear
        </Button>
      </div>

      <List style={{ marginTop: 20 }}>
        {todos.map((t) => (
          <ListItem
            key={t.id}
            component={Paper}
            style={{
              marginTop: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              gap: "8px",
            }}
          >
            {editId === t.id ? (
              <>
                <TextField
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  size="small"
                  autoFocus
                  fullWidth
                />
                <IconButton color="primary" onClick={saveEdit}>
                  <CheckIcon />
                </IconButton>
                <IconButton color="error" onClick={cancelEdit}>
                  <CloseIcon />
                </IconButton>
              </>
            ) : (
              <>
                <span style={{ flex: 1 }}>{t.text}</span>
                <IconButton onClick={() => startEdit(t.id, t.text)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => removeTodo(t.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
