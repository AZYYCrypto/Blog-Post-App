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
import { useAppContext } from "../contexts/AppContext";
import React, { useEffect } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
const SignIn = () => {
  const initialStateFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Plaase enter valid email")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  const { googleSignIn, user, signIn } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 800);
    try {
      const { user } = await signIn(values.email, values.password);

      localStorage.setItem("uid", user.uid);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
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
      navigate("/");
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
      <Toaster />

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
          <Formik
            initialValues={initialStateFormValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form style={{ display: "flex", flexDirection: "column" }}>
                <Field
                  as={TextField}
                  id="outlined-title-input"
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  type="text"
                  sx={{ margin: "1rem" }}
                  required
                  helperText={
                    <ErrorMessage name="email">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  }
                  autoFocus={true}
                />
                <Field
                  as={TextField}
                  id="outlined-title-input"
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  sx={{ margin: "1rem" }}
                  required
                  helperText={
                    <ErrorMessage name="password">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  }
                />

                <Field
                  as={FormControlLabel}
                  sx={{ marginLeft: "0.3rem" }}
                  control={<Checkbox color="primary" />}
                  label="Remember Me"
                  name="rememberMe"
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  sx={{ margin: "1rem" }}
                >
                  {props.isSubmitting ? "Loading.." : "Sign In "}
                </Button>
              </Form>
            )}
          </Formik>
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
