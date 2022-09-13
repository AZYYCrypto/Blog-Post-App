import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../configs/firebase";
import { deleteObject, ref } from "firebase/storage";

const DeleteDocIcon = ({ imageUrl, id }) => {
  const handleDeletePost = async () => {
    try {
      await deleteDoc(doc(db, "posts", id));
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
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
