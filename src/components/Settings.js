import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { updateEmail, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../configs/firebase";
import { v4 } from "uuid";
const Settings = () => {
  const [imageUpload, setImageUpload] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { user } = UserAuth();
  console.log(user);
  const updateProfilePicture = () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        updateProfile(user, {
          photoURL: url,
        });
      });
    });
  };
  const handleUpdateUserInfo = async () => {
    updateProfilePicture();
    await updateEmail(user, email);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <Typography
          sx={{ fontSize: "30px", marginBottom: "20px", color: "#1976D2" }}
        >
          Update Your Account
        </Typography>
        <Typography sx={{ color: "red", fontSize: "12px", cursor: "pointer" }}>
          Delete Account
        </Typography>
      </Box>
      <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>Profile Picture</Typography>
        <Box sx={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {user ? (
              <Avatar
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                src={
                  imageUpload
                    ? URL.createObjectURL(imageUpload)
                    : user?.photoURL
                }
              />
            ) : (
              <Avatar
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                src="https://secure.gravatar.com/avatar/136cb45477fdba38eeafeb0f222414a2?s=500&d=mm&r=g"
              />
            )}

            <label htmlFor="profilePicture">
              <AddBoxIcon />
            </label>
            <input
              type="file"
              id="profilePicture"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
              style={{ display: "none" }}
            />
          </Box>
        </Box>

        {/* <TextField
          id="outlined-title-input"
          label="Username"
          type="username"
          sx={{
            margin: "1rem 0",
          }}
          placeholder="AZYYCrypto"
        /> */}
        <TextField
          id="outlined-title-input"
          label="Email"
          type="email"
          sx={{ margin: "1rem 0" }}
          placeholder={user.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {/* <TextField
          id="outlined-title-input"
          label="Password"
          type="password"
          sx={{ margin: "1rem 0" }}
        /> */}

        <Button
          variant="contained"
          sx={{ maxWidth: "20%" }}
          onClick={handleUpdateUserInfo}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
};
export default Settings;
