import { Box, Container, Paper, TextField, Typography } from "@mui/material";

import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db, auth, storage } from "../configs/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
const CreatePost = () => {
  const [loadingSubmitPost, setLoadingSubmitPost] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("uid");
  const getUser = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.get("id") === userId) {
        setUser(doc.data());
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log();
  const createPost = () => {
    const postsCollectionRef = collection(db, "posts");
    if (!title || !description || !imageUpload) {
      alert("Please fill all the fields");
      return;
    }

    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        return addDoc(postsCollectionRef, {
          title,
          description,
          imageUrl: url,
          createdAt: Timestamp.now().toDate().toDateString(),
          author: {
            name: user.firstName + " " + user.lastName,
            id: user.id,
          },
        }).then(() => {
          setImageUpload(null);
          navigate("/");
        });
      });
    });
    setLoadingSubmitPost(true);
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
          autoFocus={true}
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

        <LoadingButton
          loading={loadingSubmitPost}
          loadingPosition="center"
          variant="contained"
          sx={{ margin: "1rem" }}
          onChange={() => setLoadingSubmitPost(!loadingSubmitPost)}
          onClick={createPost}
        >
          Submit Post
        </LoadingButton>
      </Paper>
    </Container>
  );
};

export default CreatePost;
