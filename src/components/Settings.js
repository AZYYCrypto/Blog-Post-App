import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
const Settings = () => {
  const { user } = UserAuth();
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
            <Avatar
              sx={{
                width: "70px",
                height: "70px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
              src="https://secure.gravatar.com/avatar/136cb45477fdba38eeafeb0f222414a2?s=500&d=mm&r=g"
            />

            <label htmlFor="profilePicture">
              <AddBoxIcon />
            </label>
            <input
              type="file"
              id="profilePicture"
              style={{ display: "none" }}
            />
          </Box>
        </Box>

        <TextField
          id="outlined-title-input"
          label="Username"
          type="username"
          sx={{
            margin: "1rem 0",
          }}
          placeholder="AZYYCrypto"
        />
        <TextField
          id="outlined-title-input"
          label="Email"
          type="email"
          sx={{ margin: "1rem 0" }}
          placeholder="azy@abv.bg"
        />
        <TextField
          id="outlined-title-input"
          label="Password"
          type="password"
          sx={{ margin: "1rem 0" }}
        />

        <Button variant="contained" sx={{ maxWidth: "20%" }}>
          Update
        </Button>
      </Box>
    </Container>
  );
};
export default Settings;
