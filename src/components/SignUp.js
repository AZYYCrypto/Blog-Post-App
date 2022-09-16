import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { UserAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { googleSignIn, user, createUser } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
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
        flexDirection: "column",
        gap: "1rem",
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
              <AddCircleOutlineOutlinedIcon />
            </Avatar>

            <Typography variant="h4" sx={{ marginTop: "1rem" }}>
              Sign Up
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-title-input"
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                sx={{ margin: "1rem" }}
                required
              />
              <TextField
                id="outlined-title-input"
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                sx={{ margin: "1rem" }}
                required
              />

              <TextField
                id="outlined-title-input"
                label="Email"
                placeholder="Enter email"
                type="email"
                sx={{ margin: "1rem" }}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1rem",
                }}
              >
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </Box>

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
              <TextField
                id="outlined-title-input"
                label="Confirm Password"
                placeholder="Enter password"
                type="password"
                sx={{ margin: "1rem" }}
                required
              />
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions"
                sx={{ marginLeft: "0.3rem" }}
              />
              <Button type="submit" variant="contained" sx={{ margin: "1rem" }}>
                Sign up
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography>
                  Already have an account yet?
                  <Link to="/login" style={{ color: "#1976D2" }}>
                    Sign In
                  </Link>
                </Typography>
              </Box>

              <Box
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
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default SignUp;
