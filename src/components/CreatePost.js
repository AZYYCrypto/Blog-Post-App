import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Description"
          multiline
          rows={5}
          rowsMax={10}
          sx={{ margin: "1rem" }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button variant="contained" sx={{ margin: "1rem" }}>
          Submit Post
        </Button>
      </Paper>
    </Container>
  );
};

export default CreatePost;
