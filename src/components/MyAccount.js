import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
const MyAccount = () => {
  const { user } = UserAuth();
  return (
    <Container>
      <Typography variant="h5" sx={{ textAlign: "center", marginTop: "1rem" }}>
        My Account
      </Typography>
      <Typography>
        Welcome , {(user && user.email) || user?.displayName}
      </Typography>
      <Button variant="contained" component={Link} to="/create-post">
        Create Post
      </Button>
    </Container>
  );
};
export default MyAccount;
