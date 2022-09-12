import { MailOutlined } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import { UserAuth } from "../contexts/AuthContext";
import React, { useEffect } from "react";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  AppleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <GoogleLoginButton
        style={{ maxWidth: "25%", borderRadius: "1rem", marginTop: "2rem" }}
        onClick={handleGoogleSignIn}
      />
      <FacebookLoginButton style={{ maxWidth: "25%", borderRadius: "1rem" }} />
      <AppleLoginButton style={{ maxWidth: "25%", borderRadius: "1rem" }} />
      <TwitterLoginButton style={{ maxWidth: "25%", borderRadius: "1rem" }} />
      <Button
        sx={{
          border: "1px solid black",
          paddingX: "2rem",
          textTransform: "none",
          textAlign: "left",
          color: "black",
        }}
        startIcon={<MailOutlined />}
      >
        Log in with email
      </Button>
    </Container>
  );
};

export default Login;
