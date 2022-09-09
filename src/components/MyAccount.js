import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
const MyAccount = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ textAlign: "center", marginTop: "1rem" }}>
        My Account
      </Typography>
      <Button variant="contained" component={Link} to="/create-post">
        Create Post
      </Button>
    </Container>
  );
};
export default MyAccount;
