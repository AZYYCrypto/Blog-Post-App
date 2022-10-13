import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../configs/firebase";
import { deleteObject, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const DeleteDocIcon = ({ imageUrl, id, setPostList }) => {
  const navigate = useNavigate();
  const handleDeletePost = async () => {
    try {
      await deleteDoc(doc(db, "posts", id));
      setPostList((oldpost) => oldpost.filter((post) => post.id !== id));
      await deleteObject(ref(storage, imageUrl));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <IconButton onClick={handleDeletePost}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteDocIcon;
