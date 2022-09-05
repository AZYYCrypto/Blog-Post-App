import { Box, Container } from "@mui/material";
import React from "react";
import GoogleButton from "react-google-button";
const Login = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ paddingTop: "2rem" }}>
        <GoogleButton sx={{ backgroundColor: "red" }} />
      </Box>
    </Container>
  );
};

export default Login;
