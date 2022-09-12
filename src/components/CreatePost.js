import {
  Button,
  Container,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreatePost = () => {
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "2.5rem",
          gap: "0.5rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Create a Post
        </Typography>

        <TextField
          id="outlined-title-input"
          label="Title"
          type="text"
          sx={{ margin: "1rem" }}
        />
        <TextField
          variant="outlined"
          label="Description"
          multiline
          rows={5}
          rowsMax={10}
          sx={{ margin: "1rem" }}
        />
        <Button variant="contained" sx={{ margin: "1rem" }}>
          Submit Post
        </Button>
      </Paper>
    </Container>
  );
};

export default CreatePost;
