import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const EditDocIcon = ({ setUpdateMode }) => {
  return (
    <IconButton onClick={() => setUpdateMode(true)}>
      <EditIcon />
    </IconButton>
  );
};

export default EditDocIcon;
