import { Container, Paper, TextField, Typography } from "@mui/material";

import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db, storage } from "../configs/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAppContext } from "../contexts/AppContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [User, setUser] = useState("");
  const { user, isLoading, setIsLoading } = useAppContext();

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

  const createPost = () => {
    const postsCollectionRef = collection(db, "posts");
    if (!title || !description || !imageUpload) {
      toast.error("Please fill all the fields");

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
            name: User.firstName + " " + User.lastName,
            id: User.id,
            photoAvatar: user.photoURL,
          },
        }).then(() => {
          setImageUpload(null);
          navigate("/");
        });
      });
    });
    setIsLoading(true);
  };
  return (
    <Container maxWidth="sm">
      <Toaster />
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
          loading={isLoading}
          loadingPosition="center"
          variant="contained"
          sx={{ margin: "1rem" }}
          onChange={() => setIsLoading((prev) => !prev)}
          onClick={createPost}
        >
          Submit Post
        </LoadingButton>
      </Paper>
    </Container>
  );
};

export default CreatePost;
