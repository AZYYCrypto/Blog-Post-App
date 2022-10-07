import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-mK6FeOOufW5lrJcpHSv54dTvHnOQvjFBs-QCsxvG&s"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
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
