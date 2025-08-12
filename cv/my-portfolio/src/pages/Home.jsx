import React from "react";
import {
  Container,
  Typography,
  Paper,
  Chip,
  Grid,
  Avatar,
} from "@mui/material";
import "../styles/home.scss";
import myPhoto from "../assets/my-photo.jpg";

export default function Home() {
  return (
    <Container className="home">
      <Paper elevation={3} className="resume-card">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Frontend Developer - Butunets Stanislav
            </Typography>
            <Typography variant="body1" paragraph>
              I am a passionate Frontend Developer specializing in React, Redux,
              MUI. I create clean, intuitive, and responsive user interfaces
              with smooth animations and scalable code. Experienced in state
              management and asynchronous data flows, I focus on delivering
              maintainable solutions with great user experience.
            </Typography>

            <Typography variant="h6">Skills:</Typography>
            <Grid container spacing={1} style={{ marginTop: 8 }}>
              <Grid item>
                <Chip label="HTML/CSS" />
              </Grid>
              <Grid item>
                <Chip label="Bootstrap" />
              </Grid>
              <Grid item>
                <Chip label="JavaScript (ES6+)" />
              </Grid>
              <Grid item>
                <Chip label="React" />
              </Grid>
              <Grid item>
                <Chip label="Redux / Saga" />
              </Grid>
              <Grid item>
                <Chip label="MUI" />
              </Grid>
              <Grid item>
                <Chip label="SCSS" />
              </Grid>
              <Grid item>
                <Chip label="REST / Axios" />
              </Grid>
              <Grid item>
                <Chip label="Vite/Gulp" />
              </Grid>
              <Grid item>
                <Chip label="MongoDB" />
              </Grid>
              <Grid item>
                <Chip label="Git/GitLab" />
              </Grid>
            </Grid>

            <Typography variant="h6">Hard-Skills:</Typography>
            <Grid container spacing={1} style={{ marginTop: 8 }}>
              <Grid item>
                <Chip label="Perseverance" />
              </Grid>
              <Grid item>
                <Chip label="Communication skills" />
              </Grid>
              <Grid item>
                <Chip label="Responsibility and organization" />
              </Grid>
              <Grid item>
                <Chip label="Curiosity and self-development" />
              </Grid>
              <Grid item>
                <Chip label="Attention to detail and structure" />
              </Grid>
              <Grid item>
                <Chip label="Clean architecture and code modularity" />
              </Grid>
            </Grid>

            <Typography variant="h6" style={{ marginTop: 16 }}>
              Languages:
            </Typography>
            <Grid container spacing={1} style={{ marginTop: 8 }}>
              <Grid item>
                <Chip label="Ukrainian : Native speaker" />
              </Grid>
              <Grid item>
                <Chip label="Russian: Advanced" />
              </Grid>
              <Grid item>
                <Chip label="English: Upper-Intermediate" />
              </Grid>
              <Grid item>
                <Chip label="Slovak: Upper-Intermediate" />
              </Grid>
            </Grid>

            <Typography variant="h6" style={{ marginTop: 16 }}>
              Experience:
            </Typography>
            <ul>
              <li>Developing interfaces in React</li>
              <li>
                Developed a task management SPA application (TODO list) using
                React and hooks to manage component state.
              </li>
              <li>
                Implemented global state management using Redux and organized
                asynchronous operations via Redux-Saga to interact with the REST
                API (mockapi.io)
              </li>
              <li>
                Conducted code refactoring, ensured adherence to clean
                architecture principles and good programming practices
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4} className="photo-wrapper">
            <Avatar
              src={myPhoto}
              alt="Butunets Stanislav"
              sx={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                border: "4px solid #fff",
                objectFit: "cover",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
