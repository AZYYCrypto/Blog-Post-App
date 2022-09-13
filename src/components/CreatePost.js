import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, auth, storage } from "../configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUplaod, setImageUpload] = useState("");
  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {
    if (!title || !description || !imageUplaod) {
      alert("Please fill all the fields");
      return;
    }
    await addDoc(postsCollectionRef, {
      title,
      description,
      imageUrl: "here image url",
      createdAt: Timestamp.now().toDate().toDateString(),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
    if (imageUplaod == null) return;
    const imageRef = ref(storage, `images/${imageUplaod.name + v4()}`);
    uploadBytes(imageRef, imageUplaod).then(() => {
      console.log("Image Upload!!!");
    });
  };
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
        <TextField
          type="file"
          sx={{ margin: "1rem" }}
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        <Button
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={createPost}
        >
          Submit Post
        </Button>
      </Paper>
    </Container>
  );
};

export default CreatePost;
