import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { UserAuth } from "../contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { googleSignIn, user, signIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };
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
      component="form"
      onSubmit={handleSubmit}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "2.5rem",
            gap: "0.5rem",
          }}
        >
          <Grid align="center" sx={{ marginTop: "1rem" }}>
            <Avatar sx={{ backgroundColor: "#1976D2" }}>
              <LockOutlined />
            </Avatar>
            <Typography variant="h4" sx={{ marginTop: "1rem" }}>
              Sign In
            </Typography>
          </Grid>

          <TextField
            id="outlined-title-input"
            label="Email"
            placeholder="Enter email"
            type="text"
            sx={{ margin: "1rem" }}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-title-input"
            label="Password"
            placeholder="Enter password"
            type="password"
            sx={{ margin: "1rem" }}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <FormControlLabel
            sx={{ marginLeft: "0.3rem" }}
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
          <Button type="submit" variant="contained" sx={{ margin: "1rem" }}>
            Sign in
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Typography>
              <Link to="#" style={{ color: "#1976D2" }}>
                Forgot password?
              </Link>
            </Typography>
            <Typography>
              Do you have an account?
              <Link to="/register" style={{ color: "#1976D2" }}>
                Sign Up
              </Link>
            </Typography>
          </Box>

          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <GoogleLoginButton
              style={{
                borderRadius: "1rem",
                margin: "2rem 2rem",
                maxWidth: "52%",
              }}
              onClick={handleGoogleSignIn}
            >
              Continue with Google
            </GoogleLoginButton>
          </Box> */}
        </Paper>
      </Container>
    </Container>
  );
};

export default SignIn;
